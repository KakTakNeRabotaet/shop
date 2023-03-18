@extends('layouts.main')

@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Редоктировать категорию</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item active">Главная</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <!-- Small boxes (Stat box) -->
            <div class="row">
                <form action="{{route('product.update', $product->id)}}" method="post">
                    @csrf
                    @method('patch')
                    <div class="form-group">
                        <input value="{{$product->title ?? old('title')}}" type="text" name="title" class="form-control"
                               placeholder="Наименование">
                    </div>
                    <div class="form-group">
                        <input value="{{$product->content ?? old('content')}}" type="text" name="content"
                               class="form-control" placeholder="Описание">
                    </div>
                    <div class="form-group">
                        <textarea value="{{$product->description ?? old('description')}}" name="description" cols="30"
                                  class="form-control" rows="10"
                                  placeholder="Контент"></textarea>
                    </div>
                    <div class="form-group">
                        <input value="{{$product->price ?? old('price')}}" type="text" name="price" class="form-control"
                               placeholder="Цена">
                    </div>
                    <div class="form-group">
                        <input value="{{$product->count ?? old('count')}}" type="text" name="count" class="form-control"
                               placeholder="Количество на складе">
                    </div>
                    <div class="form-group">
                        <img src="{{url('storage/' . $product->preview_image)}}" width="200px" alt="">
                    </div>
                    <div class="form-group">

                        <div class="input-group">
                            <div class="custom-file">
                                <input name="preview_image" type="file" class="custom-file-input" id="exampleInputFile">
                                <label class="custom-file-label" for="exampleInputFile">Выберите файл</label>
                            </div>
                            <div class="input-group-append">
                                <span class="input-group-text">Загрузка</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <select name="category_id" class="form-control select2" data-dropdown-css-class="select2-danger"
                                style="width: 100%;">
                            <option selected="selected" disabled>Выберите категорию</option>
                            @foreach($categories as $category)
                                <option value="{{$category->id}}"
                                    {{$category->id == $product->category_id ? ' selected' : ''}}
                                >{{$category->title}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <select name="tags[]" class="tags" multiple="multiple" data-placeholder="Выберите тег"
                                style="width: 100%;">
                            @foreach($tags as $tag)
                                <option
                                    {{is_array( $product->tags ) && in_array($tag->id, old('tags')) ? ' selected' : ''}} value="{{$tag->id}}">{{$tag->title}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <select name="colors[]" class="colors" multiple="multiple" data-placeholder="Выберите цвет"
                                style="width: 100%;">
                            @foreach($colors as $color)
                                <option
                                    {{is_array( $product->colors ) && in_array($color->id, $product->colors) ? ' selected' : ''}}  value="{{$color->id}}">{{$color->title}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Редактировать">
                    </div>
                </form>
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
@endsection

