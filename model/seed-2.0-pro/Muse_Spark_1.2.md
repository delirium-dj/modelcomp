# ByteDance Seed 2.0 Pro — findings by Muse Spark 1.2

- Source: ByteDance / Seed 2.0 Pro (bytedance/seed-2.0-pro, deepinfra/ByteDance/Seed-2.0-pro, volcengine/doubao-seed-2-0-pro-260215)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro (Doubao Seed 2.0 Pro 260215)
- **Short description:** ByteDance Volcano Engine frontier multimodal reasoning model — flagship Pro tier for complex reasoning, long-context and multimodal generation; tiered with Lite/Mini.
- **Provider / access:** Volcengine Ark / BytePlus / DeepInfra `ByteDance/Seed-2.0-pro` / AtlasCloud — API ID `doubao-seed-2-0-pro-260215` (Chat Completions via Volcengine Ark). OpenCode Zen not listed as Free; DeepInfra route `deepinfra/ByteDance/Seed-2.0-pro`.
- **Release / knowledge:** Released 2026-02-14/02-15 (Phaseo Feb 14, LLMReference Feb 14, seed.bytedance.com 0214 model card); knowledge cutoff not disclosed, approx. early 2026.
- **IDs:** `volcengine/doubao-seed-2-0-pro-260215`, `deepinfra/ByteDance/Seed-2.0-pro`, `bytedance/seed-2.0-pro`
- **Context window:** 256K total (256,000 tokens; max output 65K) — verified via meta.json 256K/65K, llmboard.ai 256K, llmreference.com 256k.
- **Modalities:** Text, image, video in; text out; reasoning yes (long-CoT, thinking); tool calls / function calling; JSON/structured outputs; multimodal generation (image/video generation per seed2 site).
- **Pricing (as of 2026-09-25):** Official Volcengine Ark: **$0.47 / $2.37** per 1M input/output (¥3.41/¥17.04) per model card PDF Table 1; providers: $0.50/$3.00 (DeepInfra/AtlasCloud/Requesty), implied caching $0.10 cache-read. Source: Seed2.0 Model Card PDF, llmboard.ai, llmreference.com, Phaseo. Paid only; no verified Free tier.
- **Architecture:** Proprietary dense/mixture (not disclosed); not open-weights.

### Raw benchmarks found

Agent / tool use:

- τ-bench (τ²-Bench Retail): **90.4%** (llmreference/Phaseo citing seed.bytedance.com official benchmark table)
- Terminal-Bench / SWE-Lancer / SWE-Bench Pro etc.: described as evaluated in 5 dimensions (Coding Agents, Search Agents, Tool Use, GUI Agents, Deep Research) per model card, but per-benchmark numeric beyond below not extracted in search snapshot — **no verified single-point Terminal-Bench 2.0 % found** in this snapshot (card lists category but table truncated)
- SWE Atlas Codebase QnA / Toolathon / MCP-Atlas: **no verified public score found** for this exact ID in snapshot
- GDPval-AA / Tau3: **no verified public score found** for this ID

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (model card PDF table STEM 88.9, llmboard 88.90% rank 35/250 Sep 17 2026, Neura 88.9% verified, llm-registry, MMLU-Pro cohort)
- MMLU-Pro: **87.0%** (llmreference seed.bytedance.com)
- SuperGPQA: **73.8%** (model card PDF snippet 73.8)
- LPFQA: **52.6%** (model card PDF)
- HLE (no tool, text only): **33.3%** (model card PDF HLE 33.3) ; HealthBench 57.7 implied
- AIME 2025: **98.3%** (llmreference/Phaseo AIME 98.3 accuracy / Neura AIME 9x.x truncated)
- LiveCode-adjacent reasoning: see Coding section
- MRCR / GraphWalks: attributed in card — MRCR 89.4%, GraphWalks BFS 80.5/99.7-type numbers in PDF snippet but truncated/hard to parse — **provisional MRCR ~89%** (PDF snippet), not fully verified

Coding:

- SWE-bench Verified: **76.5%** (llmboard 76.50% Sep 17 2026, Neura 76.5% verified, llmreference 76.5)
- SWE-bench Pro: **no verified numeric extracted in snapshot** (card lists SWE-Bench Pro category, but table value truncated)
- LiveCodeBench v6: **87.8%** (llmreference v6 87.8)
- Codeforces Elo (Jun-Dec 2025 set): referenced in methodology but not extracted — no verified single Elo found
- SciCode: **not extracted for Pro in snapshot** (card lists Scicode as dimension)
- Aider Polyglot / ArtifactsBench / CodeSimpleQA: listed as evaluated, no verified numeric extracted
- Artificial Analysis Coding indices: **no verified AA Coding Index found for this ID**

Long context:

- MRCR v (needle) 89.4% (model card snippet 89.4 MRCR v), GraphWalks 80.5/92 etc. (PDF fragmented) — suggests strong long-context but no clean RULER point score found
- Verified window 256K; no independent RULER 98%+ retrieval claim found

### Normalized scores (1–100)

- **Tool use: 80/100.** τ-bench Retail 90.4% is elite tool-use; missing Terminal-Bench definitive % and GDPval/Tau3 prevents frontier 90-100; agentic coding suites listed but without extracted scores cap below 85 — inferred strong but not 88%+ TB level.
- **Reasoning: 88/100.** GPQA 88.9% + MMLU-Pro 87.0% near frontier (90%+ =90-100) but just below, AIME 98.3% frontier, SuperGPQA 73.8% strong; HLE 33.3% ~35% near 40% frontier threshold caps slightly; MRCR provisional 89% supports long reasoning.
- **Context window: 73/100.** 256K total (65K out) in 200K-500K tier (65-84) → 73 at 256K; not 1M tier, so cannot reach 95-100 despite strong retrieval claim.
- **Multimodal: 82/100.** Text+image+video in, text out (plus generation); MRCR/multimodal benchmarks MMMU 85.4% (llmreference) reinforce; no audio in/out, so below 90-100 audio-omni tier — methodology +video =75-90.
- **Coding: 84/100.** SWE Verified 76.5% strong (rank 31/116 73rd pct), LiveCodeBench 87.8% frontier-level, but lack of SWE-Pro hard number and Terminal definitive % caps below DeepSWE 74%+/85% TB frontier 90-100.
- **Cost efficiency: 89/100.** $0.47/$2.37 (~order magnitude cheaper than GPT-5.2 $1.75/$14 and Opus $5/$25 per card Table 1) is near $0.60/$2.20 ~92 tier at very strong value; slightly below 100 free tier but elite paid value.
- **Overall Score: 81/100.** Mean of five quality dims (80+88+73+82+84)/5=81.4 → 81. Best-fit: cost-efficient frontier reasoning/coding with 256K multimodal — choose when GPQA/AIME+coding at ~$0.47/$2.37 vs $2+/$12 competitors matters.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-25
- Method: public internet research (ByteDance Seed 2.0 Model Card PDF 0214, seed.bytedance.com blog/seed2, llmboard.ai, Neura Market, llmreference.com, llm-registry, Phaseo); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

