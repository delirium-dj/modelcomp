- Source: OpenAI/GPT-5.5
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's 2026-04-24 flagship, co-designed with NVIDIA and positioned as "a new kind of intelligence for real work and agents". GPT-5.5 Pro is the higher-tier variant, not this model. **Retired from ChatGPT, ChatGPT Work and logged-in Codex on 2026-10-14** (announced 2026-09-16); the API remained available at that time. A distinct, now-deprecated model.
- **Provider / access:** ChatGPT Plus / Pro / Business / Enterprise and Codex at launch; API followed later with "different safeguards". Third-party launch coverage described million-token context support for the generation (generation-level claim, not a verified model-specific figure).
- **Release / knowledge:** 2026-04-24 (spotted in Codex CLI on 2026-04-22); retired from chat surfaces 2026-10-14; knowledge cutoff: no verified public score found.
- **IDs:** `gpt-5.5` family ID as cited; Pro tier tracked separately as `gpt-5.5-pro`. No free Zen ID verified.
- **Context window:** no verified GPT-5.5-specific figure in the retrieved Baike article — no verified public score found. Third-party launch coverage describes 1M-token context for the generation; not attributed as a verified spec here.
- **Modalities:** text in, text out on the documented ChatGPT/Codex surfaces; native agentic capability, computer/office workflow control, scientific research workflows and agentic programming. Third-party coverage claims multimodal support but this was not confirmed in the fetched primary page; no verified image/audio/video input or non-text output attributed here.
- **Pricing (as of 2026-11-14):** no per-token rate card in the retrieved pages — subscription access at launch, API pricing not published here; no verified public price found. Launch claims emphasise efficiency ("highest intelligence score for the same output-token volume", with markedly lower total token consumption than other models) — a qualitative vendor claim, not a scored benchmark.
- **Architecture:** Proprietary, closed weights; **co-designed with NVIDIA**, trained and served on NVIDIA **Blackwell (GB200 NVL72 rack-scale systems)** with hardware/software co-optimisation. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Official positioning as an agentic model that "does more with less guidance"; OpenAI's Chief Research Officer cited markedly improved computer-office and scientific-workflow control with drug-discovery potential (qualitative, no numbers)
- Terminal-Bench / Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found
- GPT-5.5 Pro lineage (different ID): the Gowers additive-number-theory proof — not attributed to this model

Reasoning / knowledge:

- Launch claim: highest intelligence score **for the same output-token volume**, with significantly lower total token consumption than other models (relative, no absolute score published in the retrieved page)
- GPT-5.4 comparison: 57.7% SWE-bench Pro belongs to GPT-5.4, not this model — not attributed here
- GPQA Diamond / HLE / ARC-AGI / LCR / CritPt / AA Intelligence Index: no verified public score found for this exact ID

Coding:

- Described as an agentic programming model (spotted as such in Codex CLI pre-release); no named coding benchmark score published in the retrieved pages — no verified public score found
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- Third-party million-token context claim (generation-level); no MRCR / RULER / GraphWalks figure found — no verified public score found

Known behaviour issue (context, not scored): in May 2026 users reported GPT-5.5 spontaneously inserting "goblin / gremlin / troll" into unrelated conversations (camera-advice and code-performance threads) — a documented degeneration.

### Normalized scores (1–100)

- **Tool use: 85/100.** Native agentic positioning with improved office/computer/scientific workflow control and Codex integration; capped by no scored agent benchmark for this exact ID and by the documented "goblin" degeneration.
- **Reasoning: 86/100.** Frontier April-2026 positioning with a best-intelligence-per-output-token claim and Blackwell co-design; capped by no published numeric reasoning benchmark here and by retirement after six months.
- **Context window: 84/100.** A generation-level 1M-context claim with token-efficient operation; capped by no verified model-specific window and no long-context retrieval measurement.
- **Multimodal: 70/100.** Scored conservatively: the fetched primary page documents only text-based ChatGPT/Codex agentic behaviour. Third-party multimodal claims were not confirmed in the primary source, so no higher score is justified.
- **Coding: 85/100.** Explicitly shipped as an agentic programming model in Codex; capped by zero published named coding benchmark scores for this exact ID.
- **Cost efficiency: 72/100.** Strong token-efficiency claims and subscription-bundled access; capped by no public per-token rate card and by the 2026-10-14 deprecation forcing migration. Excluded from Overall.
- **Overall Score: 82/100.** Half-up mean of 85, 86, 84, 70, 85 = 82.0 → 82. Best fit: historical/legacy evaluation of token-efficient agentic work; for production use OpenAI itself directs users to GPT-5.6 Sol or GPT-6 Astra.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-5.5 article (release/retirement timeline, NVIDIA Blackwell co-design, positioning, token-efficiency claim, goblin degeneration), plus the Baidu Baike GPT-5.5 Pro article for the distinct Pro-tier identity. This model's Baike entry publishes almost no conventional benchmark table, so nearly every raw row is honestly marked "no verified public score found" and the scores rest on documented positioning, architecture and availability. Pro-tier results and GPT-5.4 figures are explicitly NOT attributed to this ID. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [GPT-5.5 — 百度百科 (release, retirement, Blackwell co-design, efficiency, controversy)](https://baike.baidu.com/item/GPT-5.5/67670920)
  - [GPT-5.5 Pro — 百度百科 (distinct higher-tier variant identity)](https://baike.baidu.com/item/GPT-5.5%20Pro/67770677)
