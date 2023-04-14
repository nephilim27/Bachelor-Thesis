
    create table FoodEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        calories integer,
        consumedAt timestamp(6),
        name varchar(255),
        user_id integer not null,
        primary key (id)
    );

    create table SleepEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        completedAt timestamp(6),
        duration timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table User (
       id integer not null,
        activityLevel varchar(255),
        age integer,
        birthDate varchar(255),
        currentWeight float(53),
        email varchar(255),
        finishedOnboarding boolean,
        goalDate varchar(255),
        goalWeight float(53),
        height float(53),
        name varchar(255),
        sex varchar(255),
        startWeight float(53),
        weeklyGoal integer,
        primary key (id)
    );

    create table WaterEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        amount integer,
        consumedAt timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table WorkoutEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        caloriesBurnt integer,
        category varchar(255),
        completedAt timestamp(6),
        duration float(53),
        user_id integer not null,
        primary key (id)
    );

    alter table if exists FoodEntry 
       add constraint FKeojmmhf2kugktxmnmbvj8xice 
       foreign key (user_id) 
       references User;

    alter table if exists SleepEntry 
       add constraint FKrs8jbh8ypkcm9hpsl4sdmds4g 
       foreign key (user_id) 
       references User;

    alter table if exists WaterEntry 
       add constraint FKeo7q66fmi06gtxpelh3xe6evs 
       foreign key (user_id) 
       references User;

    alter table if exists WorkoutEntry 
       add constraint FK9pdqns0dgtfymxl6paunacctu 
       foreign key (user_id) 
       references User;

    create table FoodEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        calories integer,
        consumedAt timestamp(6),
        name varchar(255),
        user_id integer not null,
        primary key (id)
    );

    create table SleepEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        completedAt timestamp(6),
        duration timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table User (
       id integer not null,
        activityLevel varchar(255),
        age integer,
        birthDate varchar(255),
        currentWeight float(53),
        email varchar(255),
        finishedOnboarding boolean,
        goalDate varchar(255),
        goalWeight float(53),
        height float(53),
        name varchar(255),
        sex varchar(255),
        startWeight float(53),
        weeklyGoal integer,
        primary key (id)
    );

    create table WaterEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        amount integer,
        consumedAt timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table WorkoutEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        caloriesBurnt integer,
        category varchar(255),
        completedAt timestamp(6),
        duration float(53),
        user_id integer not null,
        primary key (id)
    );

    alter table if exists FoodEntry 
       add constraint FKeojmmhf2kugktxmnmbvj8xice 
       foreign key (user_id) 
       references User;

    alter table if exists SleepEntry 
       add constraint FKrs8jbh8ypkcm9hpsl4sdmds4g 
       foreign key (user_id) 
       references User;

    alter table if exists WaterEntry 
       add constraint FKeo7q66fmi06gtxpelh3xe6evs 
       foreign key (user_id) 
       references User;

    alter table if exists WorkoutEntry 
       add constraint FK9pdqns0dgtfymxl6paunacctu 
       foreign key (user_id) 
       references User;

    create table FoodEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        calories integer,
        consumedAt timestamp(6),
        name varchar(255),
        user_id integer not null,
        primary key (id)
    );

    create table SleepEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        completedAt timestamp(6),
        duration timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table User (
       id serial not null,
        activityLevel varchar(255),
        age integer,
        birthDate varchar(255),
        currentWeight float(53),
        email varchar(255),
        finishedOnboarding boolean,
        goalDate varchar(255),
        goalWeight float(53),
        height float(53),
        name varchar(255),
        sex varchar(255),
        startWeight float(53),
        weeklyGoal integer,
        primary key (id)
    );

    create table WaterEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        amount integer,
        consumedAt timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table WorkoutEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        caloriesBurnt integer,
        category varchar(255),
        completedAt timestamp(6),
        duration float(53),
        user_id integer not null,
        primary key (id)
    );

    alter table if exists FoodEntry 
       add constraint FKeojmmhf2kugktxmnmbvj8xice 
       foreign key (user_id) 
       references User;

    alter table if exists SleepEntry 
       add constraint FKrs8jbh8ypkcm9hpsl4sdmds4g 
       foreign key (user_id) 
       references User;

    alter table if exists WaterEntry 
       add constraint FKeo7q66fmi06gtxpelh3xe6evs 
       foreign key (user_id) 
       references User;

    alter table if exists WorkoutEntry 
       add constraint FK9pdqns0dgtfymxl6paunacctu 
       foreign key (user_id) 
       references User;

    create table FoodEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        calories integer,
        consumedAt timestamp(6),
        name varchar(255),
        user_id integer not null,
        primary key (id)
    );

    create table SleepEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        completedAt timestamp(6),
        duration timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table User (
       id serial not null,
        activityLevel varchar(255),
        age integer,
        birthDate varchar(255),
        currentWeight float(53),
        email varchar(255),
        finishedOnboarding boolean,
        goalDate varchar(255),
        goalWeight float(53),
        height float(53),
        name varchar(255),
        sex varchar(255),
        startWeight float(53),
        weeklyGoal integer,
        primary key (id)
    );

    create table WaterEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        amount integer,
        consumedAt timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table WorkoutEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        caloriesBurnt integer,
        category varchar(255),
        completedAt timestamp(6),
        duration float(53),
        user_id integer not null,
        primary key (id)
    );

    alter table if exists FoodEntry 
       add constraint FKeojmmhf2kugktxmnmbvj8xice 
       foreign key (user_id) 
       references User;

    alter table if exists SleepEntry 
       add constraint FKrs8jbh8ypkcm9hpsl4sdmds4g 
       foreign key (user_id) 
       references User;

    alter table if exists WaterEntry 
       add constraint FKeo7q66fmi06gtxpelh3xe6evs 
       foreign key (user_id) 
       references User;

    alter table if exists WorkoutEntry 
       add constraint FK9pdqns0dgtfymxl6paunacctu 
       foreign key (user_id) 
       references User;

    create table FoodEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        calories integer,
        consumedAt timestamp(6),
        name varchar(255),
        user_id integer not null,
        primary key (id)
    );

    create table SleepEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        completedAt timestamp(6),
        duration timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table User (
       id serial not null,
        activityLevel varchar(255),
        age integer,
        birthDate varchar(255),
        currentWeight float(53),
        email varchar(255),
        finishedOnboarding boolean,
        goalDate varchar(255),
        goalWeight float(53),
        height float(53),
        name varchar(255),
        sex varchar(255),
        startWeight float(53),
        weeklyGoal integer,
        primary key (id)
    );

    create table WaterEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        amount integer,
        consumedAt timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table WorkoutEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        caloriesBurnt integer,
        category varchar(255),
        completedAt timestamp(6),
        duration float(53),
        user_id integer not null,
        primary key (id)
    );

    alter table if exists FoodEntry 
       add constraint FKeojmmhf2kugktxmnmbvj8xice 
       foreign key (user_id) 
       references User;

    alter table if exists SleepEntry 
       add constraint FKrs8jbh8ypkcm9hpsl4sdmds4g 
       foreign key (user_id) 
       references User;

    alter table if exists WaterEntry 
       add constraint FKeo7q66fmi06gtxpelh3xe6evs 
       foreign key (user_id) 
       references User;

    alter table if exists WorkoutEntry 
       add constraint FK9pdqns0dgtfymxl6paunacctu 
       foreign key (user_id) 
       references User;

    create table FoodEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        calories integer,
        consumedAt timestamp(6),
        name varchar(255),
        user_id integer not null,
        primary key (id)
    );

    create table SleepEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        completedAt timestamp(6),
        duration timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table User (
       id serial not null,
        primary key (id)
    );

    create table WaterEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        amount integer,
        consumedAt timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table WorkoutEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        caloriesBurnt integer,
        category varchar(255),
        completedAt timestamp(6),
        duration float(53),
        user_id integer not null,
        primary key (id)
    );

    alter table if exists FoodEntry 
       add constraint FKeojmmhf2kugktxmnmbvj8xice 
       foreign key (user_id) 
       references User;

    alter table if exists SleepEntry 
       add constraint FKrs8jbh8ypkcm9hpsl4sdmds4g 
       foreign key (user_id) 
       references User;

    alter table if exists WaterEntry 
       add constraint FKeo7q66fmi06gtxpelh3xe6evs 
       foreign key (user_id) 
       references User;

    alter table if exists WorkoutEntry 
       add constraint FK9pdqns0dgtfymxl6paunacctu 
       foreign key (user_id) 
       references User;

    create table FoodEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        calories integer,
        consumedAt timestamp(6),
        name varchar(255),
        user_id integer not null,
        primary key (id)
    );

    create table SleepEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        completedAt timestamp(6),
        duration timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table User (
       id serial not null,
        primary key (id)
    );

    create table WaterEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        amount integer,
        consumedAt timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table WorkoutEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        caloriesBurnt integer,
        category varchar(255),
        completedAt timestamp(6),
        duration float(53),
        user_id integer not null,
        primary key (id)
    );

    alter table if exists FoodEntry 
       add constraint FKeojmmhf2kugktxmnmbvj8xice 
       foreign key (user_id) 
       references User;

    alter table if exists SleepEntry 
       add constraint FKrs8jbh8ypkcm9hpsl4sdmds4g 
       foreign key (user_id) 
       references User;

    alter table if exists WaterEntry 
       add constraint FKeo7q66fmi06gtxpelh3xe6evs 
       foreign key (user_id) 
       references User;

    alter table if exists WorkoutEntry 
       add constraint FK9pdqns0dgtfymxl6paunacctu 
       foreign key (user_id) 
       references User;

    create table FoodEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        calories integer,
        consumedAt timestamp(6),
        name varchar(255),
        user_id integer not null,
        primary key (id)
    );

    create table SleepEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        completedAt timestamp(6),
        duration timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table UserData (
       id serial not null,
        primary key (id)
    );

    create table WaterEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        amount integer,
        consumedAt timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table WorkoutEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        caloriesBurnt integer,
        category varchar(255),
        completedAt timestamp(6),
        duration float(53),
        user_id integer not null,
        primary key (id)
    );

    alter table if exists FoodEntry 
       add constraint FKro16lbaqfjil9cjktv9pf4xt4 
       foreign key (user_id) 
       references UserData;

    alter table if exists SleepEntry 
       add constraint FK9wh9io7xrjmgskmosjfq2kl7a 
       foreign key (user_id) 
       references UserData;

    alter table if exists WaterEntry 
       add constraint FKjxa9xn54ndeijk19yre7a26r0 
       foreign key (user_id) 
       references UserData;

    alter table if exists WorkoutEntry 
       add constraint FKib629ngqjjmrj19ugj1ka3d7b 
       foreign key (user_id) 
       references UserData;

    create table FoodEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        calories integer,
        consumedAt timestamp(6),
        name varchar(255),
        user_id integer not null,
        primary key (id)
    );

    create table SleepEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        completedAt timestamp(6),
        duration timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table UserData (
       id serial not null,
        activityLevel varchar(255),
        age integer,
        birthDate varchar(255),
        currentWeight float(53),
        email varchar(255),
        goalDate varchar(255),
        goalWeight float(53),
        height float(53),
        name varchar(255),
        sex varchar(255),
        startWeight float(53),
        weeklyGoal integer,
        primary key (id)
    );

    create table WaterEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        amount integer,
        consumedAt timestamp(6),
        user_id integer not null,
        primary key (id)
    );

    create table WorkoutEntry (
       id serial not null,
        dateTime timestamp(6) not null,
        type varchar(255),
        caloriesBurnt integer,
        category varchar(255),
        completedAt timestamp(6),
        duration float(53),
        user_id integer not null,
        primary key (id)
    );

    alter table if exists FoodEntry 
       add constraint FKro16lbaqfjil9cjktv9pf4xt4 
       foreign key (user_id) 
       references UserData;

    alter table if exists SleepEntry 
       add constraint FK9wh9io7xrjmgskmosjfq2kl7a 
       foreign key (user_id) 
       references UserData;

    alter table if exists WaterEntry 
       add constraint FKjxa9xn54ndeijk19yre7a26r0 
       foreign key (user_id) 
       references UserData;

    alter table if exists WorkoutEntry 
       add constraint FKib629ngqjjmrj19ugj1ka3d7b 
       foreign key (user_id) 
       references UserData;
