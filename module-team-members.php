<!-- Team member -->
<section class="module module--team-members bg bg--dark pd pd--md">
    <div class="container md">

        <?php if (!empty($content['team_heading'])) : ?>
            <div class="heading has-margin is-centered is-white">

                <?php if (!empty($content['team_eyebrow'])) : ?>
                    <span class="heading__uptitle">
                        <?php echo esc_html($content['team_eyebrow']); ?>
                    </span>
                <?php endif; ?>

                <h2 class="heading__title">
                    <?php echo esc_html($content['team_heading']); ?>
                </h2>

                <?php if (!empty($content['team_subheading'])) : ?>
                    <p class="heading__text">
                        <?php echo esc_html($content['team_subheading']); ?>
                    </p>
                <?php endif; ?>

            </div>
        <?php endif; ?>

        <?php if (!empty($content['select_team_member'])) : ?>
            <div class="team-members fade-in-up">

                <?php foreach ($content['select_team_member'] as $member_id) : ?>
                    <?php
                    $image       = get_field('image', $member_id);
                    $name        = get_field('name', $member_id);
                    $description = get_field('description', $member_id);
                    ?>

                    <div class="team-member">

                        <?php if (!empty($image)) : ?>
                            <div class="team-member__image">
                                <?php get_image($image, 'large'); ?>
                            </div>
                        <?php endif; ?>

                        <div class="team-member__content">

                            <?php if (!empty($name)) : ?>
                                <h3 class="team-member__name">
                                    <?php echo esc_html($name); ?>
                                </h3>
                            <?php endif; ?>

                            <?php if (!empty($description)) : ?>
                                <p class="team-member__description">
                                    <?php echo wp_kses_post($description); ?>
                            </p>
                            <?php endif; ?>

                        </div>

                            </div>

                <?php endforeach; ?>

            </div>
        <?php endif; ?>

    </div>
</section>