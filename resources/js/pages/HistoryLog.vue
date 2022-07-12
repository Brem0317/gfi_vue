<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="container"> 

                        <form class="col-md-3 input-group" action="{{url('/search-slip')}}">
  
                          <div class="input-group">
                            <div class="col-lg-2 float-right">
                              <input type="search" class="form-control" name="search" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>                          
                            </div>
                            <button type="submit" class="btn btn-primary">search</button> 
                          </div>
                        </form>
  
                        <table class="table align-middle mb-0 bg-white">
                            <thead class="">
                              <tr>
                                <th>Document Series </th>
                                <th>Customer Name</th>
                                <th>Prepared By</th>
                                <th>Approved By</th>
                                <th>Release By</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                       
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="ms-3">
                                        <p class="fw-bold mb-1"></p>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <p class="text-muted mb-0"></p>
                                  </td>
                                  <td>
                                      <p class="text-muted mb-0"></p>
                                  </td>
                                  <td>
                                      <p class="text-muted mb-0"></p>
                                  </td>
                                  <td>
                                      <p class="text-muted mb-0"></p>
                                  </td>
                                  <td>
                                    <a href="{{ route('slip.view', $value->id) }}" class="btn btn-link btn-rounded btn-sm fw-bold">Details</a>
                                  </td>
                                </tr>
                
                            </tbody>
                          </table>
                          <br>
                       </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            name: null,
        }
    },
    created() {
        if (window.Laravel.user) {
            this.name = window.Laravel.user.name
        }
    },
    beforeRouteEnter(to, from, next) {
        if (!window.Laravel.isLoggedin) {
            window.location.href = "/";
        }
        next();
    }
}
</script>