<template lang="html">
  <div class="comment-card">
    <div class="comment-card-header">
      <h5>Shaxram G’iyosov</h5>
      <span
        ><svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.361 1.72601C8.03157 0.313336 9.96908 0.313333 10.6396 1.72601L11.7986 4.16749C12.0649 4.72846 12.5796 5.11728 13.175 5.20724L15.7664 5.59875C17.2659 5.82528 17.8646 7.74112 16.7796 8.84074L14.9044 10.7412C14.4736 11.1778 14.277 11.807 14.3787 12.4235L14.8213 15.107C15.0775 16.6596 13.51 17.8437 12.1689 17.1106L9.85102 15.8437C9.31845 15.5526 8.68221 15.5526 8.14964 15.8437L5.8318 17.1106C4.49065 17.8437 2.92318 16.6596 3.17931 15.107L3.62198 12.4235C3.72369 11.807 3.52709 11.1778 3.09623 10.7412L1.22105 8.84074C0.136047 7.74113 0.734766 5.82528 2.23421 5.59875L4.82564 5.20724C5.42107 5.11728 5.9358 4.72846 6.20208 4.16749L7.361 1.72601Z"
            fill="#FFC700"
          />
        </svg>
        {{ comment.stars }}.0
      </span>
    </div>
    <div class="comment-card-body">
      <p>
        {{ comment.comment }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "commentCard",
  props: ["comment"],
};
</script>
<style lang=""></style>
