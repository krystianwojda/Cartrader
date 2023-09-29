import Joi from "joi";
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const schema = Joi.object({
    make: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number().min(1886).max(new Date().getFullYear() + 1),
    miles: Joi.number().required(),
    city: Joi.string().required(),
    numberOfSeats: Joi.number().min(1).max(100).required(),
    description: Joi.number().min(100).required(),
    features: Joi.array().items(Joi.string()).required(),
    image: Joi.string().required(),
    listerId: Joi.string().required(),
    price: Joi.number().min(0).required(),
    name: Joi.string().required()
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const  {error, value} = await schema.validate(body)

    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        });
    }

    const {
        make,
        model,
        year,
        miles,
        city,
        numberOfSeats,
        description,
        features,
        image,
        listerId,
        price,
        name
    } = body;

    const car = await prisma.car.create({
        data: {
            make,
            model,
            year,
            miles,
            city: city.toLowerCase(),
            numberOfSeats,
            description,
            features,
            image,
            listerId,
            price,
            name
        }
    })

    return {value, error};
});