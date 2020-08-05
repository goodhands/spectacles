<template>
    <nav class="col-md-2 d-flex py-lg-2 px-0 d-lg-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky my-lg-5">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        <span data-feather="home"></span>
                        Dashboard <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="file"></span>
                        Orders
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="shopping-cart"></span>
                        Products
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="users"></span>
                        Customers
                    </a>
                </li>
            </ul>

        </div>
    </nav>
</template>

<style>
    .sidebar{
        position: absolute;
        width: 100% !important;
        max-width: 100%;
        top: 0;
        right: 0;
        min-height: 100vh;
    }

    .hr{
        border: 1px solid #000;
        display: block;
        transform: rotate(0deg);
    }

    .hr-long{
        width: 35px;
        margin-top: 6px;
    }

    .hr-short{
        width: 25px;
        float: right;
    }

    .nav-control{
        border: none;
        background: transparent;
        position: absolute;
        right: 30px;
        top: 30px;
    }
</style>