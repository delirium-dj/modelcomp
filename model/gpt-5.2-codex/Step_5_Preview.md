# GPT-5.2 Codex — findings by Step 5 Preview

- Source: OpenAI (`gpt-5.2-codex`)
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's agentic-coding specialisation of GPT-5.2 — Responses-API-only, with native context compaction for long-horizon work and improved native Windows environments — released December 2025 and now **shut down** on the API, with GPT-5.3 Codex as its successor.
- **Provider / access:** **no longer available.** OpenAI's model docs list this model's status as **"Shut down"**; the OpenCode Console/Zen catalog lists GPT-5.2 Codex under deprecated models with a deprecation date of **July 23, 2026**. OpenRouter carried it as `openai/gpt-5.2-codex` (no EU in-region routing). Responses API only — Chat Completions, Batch, Realtime, fine-tuning and every other endpoint were unsupported even while live.
- **Release / knowledge:** released **2025-12-11** (snapshot; models.dev); the Codex-specific announcement post is dated **2025-12-18**. **Knowledge cutoff Aug 31, 2025** — the same cutoff as plain GPT-5.2.
- **IDs:** `gpt-5.2-codex` (OpenAI); `openai/gpt-5.2-codex` (OpenRouter, models.dev).
- **Context window:** **400,000 tokens total**, with **max input 272,000** and **max output 128,000**.
- **Modalities:** text and image in; text out — it shares GPT-5.2's vision gains. Reasoning model with `reasoning_effort` accepting **low / medium / high / xhigh**.
- **Pricing (as of 2026-10-24):** **$1.75 per 1M input / $0.175 cached input / $14.00 per 1M output** — the same per-token price as plain GPT-5.2, and slightly above its predecessor GPT-5.1-Codex ($1.25/$0.125/$10.00). No free tier.
- **Architecture:** proprietary; parameter count not disclosed.
- **What distinguishes it from GPT-5.2** (per the launch post): optimised for agentic coding, with **native context compaction for long-horizon work**, stronger project-scale refactors and migrations, improved **native Windows environments**, and stronger cybersecurity capabilities, while sharing the base model's vision gains.

### Raw benchmarks found

Coding / agentic (this is the model's whole remit, and it is where the only real data exists):

- **SWE-Bench Pro: 41.04 ± 3.57, rank 11** (scale.com's public SWE-Bench Pro leaderboard — third-party independent measurement; plain GPT-5.2 scores 29.94 on the same board)
- **SWE-Bench Pro: 56.4%** and **Terminal-Bench 2.0: 64.0%** (cometapi.com citing OpenAI's own figures). **These conflict with the scale.com measurement above** — 56.4% vs 41.04% on the same benchmark, almost certainly a harness/setup difference — and both are recorded rather than averaged.
- Terminal-Bench 2.0 at 64.0% (same OpenAai-cited source) — for reference, GPT-5.2 scores 62.2% and GPT-5.1-Codex-Max 58.1% on that harness.
- **SWE-bench Verified, SWE-Lancer, LiveCodeBench, SciCode, DeepSWE and Vibe Code Bench for the Codex variant: no verified public score found.** OpenAI's GPT-5.2 Thinking figures (SWE-bench Verified 80.0%, SWE-Lancer IC Diamond 74.6%, GPQA Diamond 92.4%, AIME 2025 100.0%, HLE no-tools 34.5%) belong to the **base non-Codex** model and are explicitly **not** transferred here.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **29 (estimated)** at xhigh effort, ranked **#100 of 215** in class (Artificial Analysis's charts also show "28 of 709" — an internal inconsistency in how AA presents the same rank).
- GPQA Diamond, AIME, HLE for the Codex variant: no verified public score found (only base-model figures exist).

Agent / tool use:

- SWE-Bench Pro and Terminal-Bench 2.0 above are the agentic-coding measures; both are coding agents rather than general tool use.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA Elo: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas: no verified public score found.
- Coding Agents Index: no verified public score found.
- Supported tools while live: `function_calling`, `web_search`, `hosted_shell`, `skills`; features included `structured_outputs`, `function_calling`, `prompt_caching`, `web_search`.

Long context:

- MRCR / RULER / GraphWalks / AA-LCR: no verified public score found. The 400K window with 272K max input is documented, and **native context compaction for long-horizon work** is a vendor-stated feature, but no retrieval-durability figure at a stated length was published.

Speed / cost:

- Output speed **81.0 tokens/second** (median for its class is 82.3 — so right at median)
- **Time to first token: 129.34 seconds** (Artificial Analysis) — the single worst latency figure in this entire research pass, by a wide margin, and a direct consequence of the xhigh default reasoning effort.
- Cost per Intelligence Index task: **N/A** (not published).

### Conflicts recorded (not silently resolved)

1. **Lifecycle status:** OpenAI's docs say **"Shut down"**; the OpenCode Zen catalog says **deprecated July 23, 2026**. These are consistent in substance (the model is no longer usable) but differ in severity — OpenAI's own docs are the authoritative source and its "Shut down" wording is used, with Zen's date recorded as the deprecation point.
2. **SWE-Bench Pro: 56.4% vs 41.04 ± 3.57** — a 15-point conflict between an OpenAI-cited figure and scale.com's independent public leaderboard. Both are recorded; the independent third-party measurement (41.04) is used for scoring because it is the one not sourced to the vendor, and the vendor figure is retained as the optimistic bound.
3. **Intelligence Index rank:** Artificial Analysis shows "#100 / 215" on its model summary but "28 of 709" on its charts — the same underlying rank presented two ways. The class-relative figure (#100/215) is used.
4. **Pricing:** models.dev lists $0.00/$0.00 (its retired-model convention) and records structured output as **No**, while OpenAI's own docs give $1.75/$0.175/$14 and explicitly list `structured_outputs` as a supported feature. OpenAI's figures are authoritative on both counts and are used; models.dev's $0 price is a retirement artifact and must not be read as "free".
5. **Structured output:** OpenAI lists `structured_outputs` as supported; models.dev says No. Resolved in favour of the vendor, with the conflict disclosed.

### Normalized scores (1–100)

- **Tool use: 76/100.** SWE-Bench Pro at 41.04-56.4% (independent, rank 11) and Terminal-Bench 2.0 at 64.0% are both genuinely strong agentic-coding results, and the supported tool set was unusually wide — `hosted_shell`, `skills`, `web_search`, `function_calling` and `structured_outputs` together. Capped below 85 because Tau3, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas and the Coding Agents Index are all unpublished, so breadth beyond coding agents is unevidenced, and because a 129.34 s TTFT made real-time agentic loops impractical.
- **Reasoning: 58/100.** Artificial Analysis's independent Intelligence Index of 29 (estimated) at xhigh effort, at #100/215 in class, sits squarely in the methodology's mid band (20-35 → 55-65). GPQA Diamond, AIME and HLE are all unpublished *for the Codex variant*, and the base GPT-5.2 Thinking figures (GPQA 92.4%, AIME 100.0%) belong to a different model and are deliberately not transferred. Scored 58 on the only independent composite that exists for this ID.
- **Context window: 80/100.** 400,000 tokens with 272,000 max input and 128,000 max output sits in the methodology's 200K-500K band (200K = 70) well above the floor, and native context compaction for long-horizon work is a genuine architectural plus for sustained sessions. Held to 80 rather than higher because no MRCR/RULER/AA-LCR retrieval figure exists at any length, so the window is documented and its durability is not.
- **Multimodal: 65/100.** Text and image in, text out — the methodology's "+image in" band (60-70), confirmed by OpenAI's own docs which state the model shares GPT-5.2's vision gains. No video, audio or PDF input and no non-text output, so nothing lifts this above the band.
- **Coding: 72/100.** SWE-Bench Pro at 41.04 ± 3.57 (independent, rank 11) or 56.4% (vendor-cited), plus Terminal-Bench 2.0 at 64.0%, are solid mid-band agentic-coding results — and the model's entire design remit was agentic coding with context compaction, native Windows environments and project-scale refactor strength. Capped at 72 because SWE-bench Verified, SWE-Lancer, LiveCodeBench, SciCode, DeepSWE and Vibe Code Bench are all unpublished for this variant, and because the two available SWE-Bench Pro figures conflict by 15 points.
- **Cost efficiency: 64/100.** $1.75/$14.00 per 1M lands between the methodology's ~$0.60/$2.20 ≈ 92 and $3/$15 ≈ 60 reference points, closer to the latter — roughly at the $1.75/$14 mark itself. Held at 64 by the practical reality that a 129.34 s TTFT and a shut-down endpoint make the price moot: there is no longer anything to buy.
- **Overall Score: 70/100.** Mean of the five quality dims (76 + 58 + 80 + 65 + 72 = 351 ÷ 5 = 70.2, half-up → 70). Best fit while it was live: long-horizon agentic coding with very large context and compaction — its design remit exactly. Worst fit now: **anything**, because OpenAI has shut the endpoint down; and even when live, general reasoning (AA Index 29, #100/215), real-time loops (129.34 s TTFT) and multimodal work.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research across four independent source families (OpenAI's official model-docs page and its Codex launch post, Artificial Analysis's model page with its independent Intelligence Index and latency measurement, scale.com's public SWE-Bench Pro leaderboard, and models.dev plus the OpenCode Zen catalog for pricing and lifecycle status), cross-compared for conflicts; scores are normalized 1-100 interpretations, not official vendor scores.
- Research note: conflicts recorded inline rather than resolved silently — lifecycle status (OpenAI "Shut down" vs Zen "deprecated July 23, 2026"), SWE-Bench Pro (56.4% vendor-cited vs 41.04 ± 3.57 independent), and models.dev's retired-model $0.00 price against OpenAI's real $1.75/$14. OpenAI's GPT-5.2 *Thinking* benchmark figures were deliberately **not** transferred to this Codex variant — they measure a different model.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
