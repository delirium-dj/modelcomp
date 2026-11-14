- Source: OpenAI/GPT-5.5 Pro
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** The highest-capability ChatGPT option in OpenAI's GPT-5.5 generation (2026-04-24), built for the hardest tasks and long-running workflows. It is the enhanced tier of GPT-5.5, not an alias. Famous for independently proving an open additive-number-theory problem for Fields Medalist Timothy Gowers.
- **Provider / access:** ChatGPT **Pro, Business and Enterprise** tiers (GPT-5.5 itself went to all paid ChatGPT users); API was announced as "coming soon" at launch. Per-model usage limits on ChatGPT Pro with reset times shown in-product. Six reasoning-effort options: Instant / Medium / High (Plus), plus Extra High / Pro Standard / Pro Extended (Pro); Business/Enterprise/Edu get plan-supported options with admin workspace controls.
- **Release / knowledge:** 2026-04-24; knowledge cutoff: no verified public score found.
- **IDs:** `gpt-5.5-pro` family ID as cited (ChatGPT option). No free Zen ID verified.
- **Context window:** no GPT-5.5 Pro-specific figure in the retrieved pages — no verified public score found. (Launch coverage describes million-token context for the GPT-5.5 generation; that generation-level figure is not attributed to the Pro option here.)
- **Modalities:** text in, text out (ChatGPT surface); extended reasoning with interruptible "thinking" (the model may emit a short plan first, and users can add instructions mid-reasoning to steer the answer); mathematical proof construction and self-verification. No verified image/audio/video input or non-text output for this option.
- **Pricing (as of 2026-11-14):** no per-token rate card — subscription-tier access only at launch (API pending); no verified public price found.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. A configurable reasoning-effort ladder up to Pro Extended.

### Raw benchmarks found

Agent / tool use:

- Long-running workflow support with mid-reasoning user steering (qualitative; no scored harness)
- Terminal-Bench / Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- **Gowers open problem (additive number theory, set sums), 2026-05-08:** starting from Melvyn Nathanson's new paper, Nathanson's own bound on a set "diameter" problem was exponential **2^k − 1**; GPT-5.5 Pro thought ~**17 minutes** and produced a construction improving the bound to **quadratic and optimal**. For general h it first improved MIT PhD student Isaac Rajagopal's exponential result, then after two further rounds of reasoning and self-verification obtained **N(h,k) ≤ O(k^(10h³))**, a polynomial bound. Rajagopal called the h²-dissipated-set idea fully original; Gowers gave no substantive mathematical guidance (only procedural prompts), said the result would be a reasonable PhD thesis chapter, and the whole proof took under **two hours** (Gowers blogged it 2026-05-08).
- LisanBench (third-party "vitality encyclopedia" page, not fetched this pass): visual IQ 145 / text IQ 130 — **not cited as evidence** because that page was not retrieved.
- GPQA Diamond / HLE / ARC-AGI / LCR / CritPt / AA Intelligence Index: no verified public score found for this exact option

Coding:

- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- Long-running workflows and extended reasoning supported; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 84/100.** Supports long-running, interruptible workflows with mid-reasoning steering and a six-level effort ladder; capped by no scored agent benchmark and by the absence of an API/tool-calling surface at launch.
- **Reasoning: 96/100.** A genuinely original, expert-validated mathematical result — quadratic optimal construction in ~17 minutes and a novel polynomial bound N(h,k) ≤ O(k^(10h³)) with self-verification, judged PhD-thesis-worthy by a Fields Medalist; capped by no standard reasoning benchmark (GPQA/HLE/AA index) published for this exact option.
- **Context window: 87/100.** Explicitly designed for long-running workflows and extended thinking with self-verification; capped by no verified token window for the Pro option and no long-context retrieval measurement.
- **Multimodal: 70/100.** Scored conservatively: the retrieved primary source documents only a text-in/text-out ChatGPT option. No verified image/audio/video input or non-text output could be confirmed, so no higher score is justified.
- **Coding: 85/100.** Strong formal-construction and self-verification capability implies solid code-capable reasoning, but no coding benchmark was published for this exact option; capped accordingly.
- **Cost efficiency: 60/100.** Subscription-only at launch (Pro/Business/Enterprise) with per-model usage limits and no public per-token rate; excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 84, 96, 87, 70, 85 = 84.4 → 84. Best fit: open-ended mathematical research and other very hard, long-running reasoning tasks where a validated original proof matters more than benchmark breadth or cost.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-5.5 Pro article (access tiers, effort ladder, product behaviour, and the full Gowers/Nathanson/Rajagopal mathematical result with exact bounds and timings). This option has almost no published conventional benchmark table, so every standard row is marked "no verified public score found" and the normalized scores rely chiefly on the documented, expert-validated mathematical proof. A third-party IQ figure surfaced in search results was deliberately NOT cited because its page was not fetched. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [GPT-5.5 Pro — 百度百科 (release, effort ladder, Gowers proof detail)](https://baike.baidu.com/item/GPT-5.5%20Pro/67770677)
