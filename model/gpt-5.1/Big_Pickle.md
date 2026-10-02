# GPT 5.1 — findings by Big Pickle

- Source: OpenAI (`opencode/gpt-5.1`, API model `gpt-5.1` = GPT-5.1 Thinking)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.1 (Thinking tier, API ID `gpt-5.1`)
- **Short description:** OpenAI's November 2025 usability-focused flagship revision of GPT-5 — warmer and more conversational, with adaptive reasoning that spends thinking tokens only where they help, and explicit Instant / Thinking variants replacing the original launch's opaque router. Held the flagship slot for just under a month before GPT-5.2 arrived; the coding-specialized GPT-5.1-Codex-Max followed a week later and is a separate entry.
- **Provider / access:** OpenAI API `gpt-5.1` (Responses and Chat Completions), with `reasoning.effort` = none (default), low, medium, high; Azure AI, Poe, Requesty, Jiekou, 302.ai, OpenRouter; OpenCode Zen `opencode/gpt-5.1`.
- **Release / knowledge:** released 2025-11-12; knowledge cutoff not published on the model page.
- **IDs:** `opencode/gpt-5.1` (Zen, standard pricing); upstream `gpt-5.1` (Thinking), `gpt-5.1-instant` (Instant), `gpt-5.1-auto` (router).
- **Context window:** 400,000 tokens, 128,000 max output (OpenAI API model page).
- **Modalities:** text and image input; text output; configurable reasoning and non-reasoning effort; tool calls; structured outputs; 24h prompt caching.
- **Pricing (as of 2026-10-02):** $1.25 in / $10.00 out per 1M; cached input $0.125; batch ≈50%; OpenCode route $1.07 / $8.50; Poe $1.10 / $9.00. No free tier.
- **Architecture:** proprietary; weights not published.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **81.9%** at high reasoning (**46.5%** non-reasoning) — Artificial Analysis
- IFBench (instruction following): **72.9%** high (**43.2%** non-reasoning) — Artificial Analysis
- Terminal-Bench Hard: **45.5%** high (**22.7%** non-reasoning) — Artificial Analysis
- GDPval-AA: **15.6%** at high — Artificial Analysis (weak professional-work output)
- SWE-Lancer IC Diamond: **69.7%** (OpenAI GPT-5.2 launch table, GPT-5.1 Thinking column)
- SWE-bench Pro (public): **50.8%** (same OpenAI table)
- Toolathlon / MCP Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (OpenAI); **87.6% ±1.9** at high and **85.0% ±2.1** at medium (Epoch AI, 2025-11-13/17); **87.3%** at high (Artificial Analysis); **64.3%** non-reasoning
- HLE (no tools): **28.5%** high / **5.3%** non-reasoning (Artificial Analysis); 25.7% in OpenAI's later comparison table, 23.7% on AnotherWrapper
- CritPt: **4.9%** high / **0.0%** non-reasoning (Artificial Analysis)
- AIME 2025: **94.0%**; Math Index 94.0% (Requesty)
- AA-Omniscience Accuracy / Non-Hallucination Rate: **37.7% / 48.1%** at high (Artificial Analysis)
- MMLU-Pro: 87.4% (Epoch AI, cited by Model Beat)

Coding:

- SWE-bench Verified: **76.3%** claimed by OpenAI; independent Epoch AI runs give **66.9% ±2.1** at high (two runs, 2026-02-18) and **66.0%** at medium on mini-SWE-agent — a ~9-point disagreement between vendor claim and independent harness
- SWE-bench Pro (public): **50.8%** (OpenAI)
- Artificial Analysis Coding Index: **49.4** at high
- LiveCodeBench / SciCode / Terminal-Bench 2.x (specific): no verified public score found for this ID

Long context:

- AA-LCR: **80.0%** at high reasoning (**45.0%** non-reasoning) — Artificial Analysis
- 400,000-token window with 128,000 max output verified on the OpenAI model page; some routes list a 272K long-context tier
- No MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 70/100.** τ²-Bench Telecom 81.9% and IFBench 72.9% at high reasoning show dependable tool orchestration; capped by Terminal-Bench Hard 45.5%, a GDPval-AA of just 15.6% on professional deliverables, and a steep drop to 46.5%/43.2%/22.7% in non-reasoning mode — the adaptive-reasoning design is the whole story here.
- **Reasoning: 74/100.** GPQA Diamond 87.3–88.1% is solidly frontier-adjacent and AIME 2025 94.0% confirms math strength; capped by HLE 28.5%, CritPt 4.9% and AA-Omniscience accuracy of 37.7%, all well behind the 2026 reasoners.
- **Context window: 82/100.** A verified 400,000-token window with a 128,000-token output ceiling, and AA-LCR 80.0% at high reasoning is a real measured long-context result rather than a documentation claim.
- **Multimodal: 70/100.** Image input alongside text with text output per the OpenAI model page, but no published MMMU or other vision figure for this ID, so the modality breadth cannot be scored from measurements.
- **Coding: 72/100.** SWE-bench Pro 50.8% and SWE-Lancer IC Diamond 69.7% are respectable, but the coding story is undercut by a 76.3% claimed vs 66.9% independently measured SWE-bench Verified and an AA Coding Index of only 49.4 — GPT-5.1-Codex-Max was OpenAI's own coding answer.
- **Cost efficiency: 78/100.** $1.25/$10 per 1M with $0.125 cache reads, a $1.07/$8.50 OpenCode route and half-price batch — inexpensive for a frontier-class model, though superseded: GPT-5.2 offers more capability for $1.75/$14.
- **Overall Score: 73.6/100.** Half-up mean of the five quality dims. Best fit as a low-cost conversational generalist with adaptive reasoning on a 400K budget; anything coding-heavy or reasoning-heavy should move to GPT-5.2 or the Codex line.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (OpenAI GPT-5.1 API model docs, GPT-5.1 system card addendum, Epoch AI benchmark rows via modelbenchmark.io, Artificial Analysis figures via OpenRouter, AnotherWrapper, AI Release Tracker); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---