# Ember-1 — Independent Research Report

## Summary and evidence

Ember-1 is Fireworks Research's September 2026 specialization of Kimi K3. Fireworks says it preserves K3's quality while using roughly **40% fewer tokens**, and its controlled evaluation reports **82.0% on Terminal-Bench 2.1** and **92.2% on SWE-bench Verified**. It accepts text and images and exposes a **1,048,576-token context window** through Fireworks.

Sources: [Fireworks Ember-1 launch](https://fireworks.ai/blog/ember-1), [Ember-1 model page](https://fireworks.ai/models/fireworks/ember-1)

## Cost, strengths, and limitations

Fireworks lists **$3 per million input tokens** and **$15 per million output tokens**. Its chief strengths are unusually high software-engineering results, million-token context, vision, and reduced reasoning-token use relative to K3. Limitations are premium output pricing, proprietary hosted access, and Fireworks' warning that multi-turn agents can still incur quadratic context growth because prior reasoning is replayed.

## Scores

- **Tool use: 92/100.** Strong terminal-agent results and Fireworks integration make it highly capable in tool-driven workflows.
- **Reasoning: 90/100.** It retains K3-class quality with substantially shorter traces, though evidence is concentrated in agent benchmarks.
- **Context window: 96/100.** A 1,048,576-token window is frontier-scale.
- **Multimodal: 89/100.** Native vision input is useful, but the release emphasizes coding more than broad multimodal evaluation.
- **Coding: 95/100.** 92.2% SWE-bench Verified and 82.0% Terminal-Bench 2.1 are excellent reported results.
- **Cost efficiency: 84/100.** Token reduction helps task cost, but $15-per-million output remains expensive.
- **Overall Score: 92/100.** Half-up rounded mean: (92 + 90 + 96 + 89 + 95) / 5 = 92.4.

## Bottom line

Ember-1 is a premium coding-and-agent specialist with excellent reported task completion and long context; its value depends on whether shorter traces offset the high output-token price.
