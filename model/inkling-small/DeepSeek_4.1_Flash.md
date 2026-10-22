# Inkling Small — findings by DeepSeek 4.1 Flash

- Source: Thinking Machines / Inkling Small (`opencode/inkling-small`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-03); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`inkling-small`, 41 rows) computes an overall **52.71/100 (#89 of 972)** and confirms the deep pass: SWE-bench Verified 80.2%, Terminal-Bench 2.1 64.7%, MCP Atlas 79.6%, BrowseComp 77.4%, GPQA-D 89.5%, HLE 47.8%, ARC-AGI-2 40.1%, AIME26 95.5%, MMMU-Pro 74.0%, AA-LCR 75.7%. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed: Thinking Machines model card/news — 42-layer sparse MoE, **276B total / 12B active** (HF widget says 266B), Apache 2.0, hybrid reasoning; **SWE-bench Verified 80.2%**, SWE-bench Pro 55.9%, MCP Atlas 79.6%, Toolathlon-Verified 54.4%, τ³-Banking 15.5%, BrowseComp 77.4%, GDPval-AA 1269 Elo, GPQA Diamond 89.5%, HLE 31.6% text / 47.8% tools, AIME 2026 95.5%, **ARC-AGI-1 84.0%**, **ARC-AGI-2 40.1%**, MMMU-Pro 74.0%, MMAU (audio) 77.0%, VoiceBench 90.1%; independent **Vals AI Index 25.46% (#44/45)**, **SWE-bench Verified 82.20%**, LiveCodeBench 85.93%, Vibe Code Bench 19.05%, GPQA 83.59%; **AA Intelligence Index 40 (v4.1 launch) vs 26 (v4.3.2 current)**; BenchLM overall 54.87 (#69/889).
> **Conflicts surfaced:** (1) **Context window** — official card "up to 1M" vs **Vals 262K** vs AA-article 256K vs aggregators 524K vs Tinker 64K standard / 256K extended. This is the clearest scoring risk, so Context is lowered. (2) **AA index rebase** — 40 → 26 across baskets. (3) **GPQA** 89.5% vendor vs 83.59% Vals. (4) **Terminal-Bench 2.1** 64.7% vendor vs 55.1% independent. (5) **Parameters** 276B (card) vs 266B (HF widget).
> **Adjusted dimensions:** Context 95→82 (served limits well below the 1M claim); Overall 80 → **78**.
> Sources: https://thinkingmachines.ai/model-card/inkling-small/ · https://huggingface.co/thinkingmachines/Inkling-Small · https://www.vals.ai/models/thinkingmachines_inkling-small · https://benchlm.ai/models/inkling-small · https://tinker-docs.thinkingmachines.ai/tinker/models/

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines' smaller Inkling variant — an open-weights (Apache 2.0), natively multimodal model that accepts text, image and audio, supports tool calling and hybrid reasoning, and previews production-grade long context.
- **Provider / access:** `opencode/inkling-small`; also OpenRouter (`thinkingmachines/inkling-small`), Tinker, DeepInfra, Baseten, NanoGPT and Hugging Face (`thinkingmachines/Inkling-Small`, plus NVFP4 and GGUF quants). Tool calling + reasoning per OpenRouter.
- **Release / knowledge:** Released 2026-07-30 (Thinking Machines announcement). Knowledge cutoff not published.
- **IDs:** `opencode/inkling-small`; Tinker `thinkingmachines/Inkling-Small`.
- **Context window:** **official "up to 1M tokens", but served/measured limits are far lower** — Vals 262K, AA article 256K, Tinker 64K standard / 256K extended, aggregators 524K. The folder's `meta.json` placeholder ("128K") is also stale.
- **Modalities:** Text, image and audio (WAV 16 kHz) in; text out. Reasoning (hybrid, effort none→max) + tool calls.
- **Pricing (as of 2026-10-11):** $0.30 in / $1.20 out per 1M (Thinking Machines; DeepInfra/OpenRouter route $0.45/$1.20); cache read ~$0.06–0.10. ~207 tokens/s.
- **Architecture:** 42-layer decoder-only sparse MoE — 6 of 256 experts + 2 shared per token; hybrid local/global attention; encoder-free, natively multimodal (images via 4-layer hMLP, audio via dMel spectrograms); **276B total / 12B active** (HF widget 266B); Apache 2.0.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (vendor) / **83.59%** (Vals); HLE 31.6% text / **47.8%** with tools (vendor); AA-HLE 33.3%
- AIME 2026 95.5%; HMMT Feb 2026 90.2%; CritPt 8.3%; ARC-AGI-1 **84.0%**; ARC-AGI-2 (semi-private) **40.1%** (ARC Prize verified)
- AA Intelligence Index **40 (v4.1 launch) → 26 (v4.3.2 current)**; AA-Omniscience index −9 (hallucination 63%); IFBench 82.2%
- Vals Index **25.46% (#44/45)**; MMLU-Pro 85.57% (Vals); BenchLM overall 54.87 (#69/889)

Agent / tool use:

- SWE-bench Verified 80.2% (vendor) / **82.20%** (Vals); SWE-bench Pro 55.9% (vendor)
- Terminal-Bench 2.1 64.7% (vendor) / 55.1% (independent); Terminal-Bench 4.0 1.0% (AA) / 0.00% (Vals)
- MCP Atlas 79.6%; Toolathlon-Verified 54.4%; τ³-Banking 15.5%; BrowseComp 77.4%; GDPval-AA 1269 Elo
- AA-Briefcase 917 Elo; Finance Agent v2 41.3; AA Agentic Index ~24–25%

Coding:

- SWE-bench Verified 82.20% (Vals) / 80.2% (vendor); LiveCodeBench 85.93% (Vals); Vibe Code Bench v1.1 **19.05%** (Vals)
- SciCode 49.7%; IOI 9.33%; AA Coding Index 52.9–53.0; ProgramBench 0.50%

Multimodal:

- MMMU-Pro 74.0% (vendor); MMAU (audio understanding) 77.0%; VoiceBench 90.1%; Vals Multimodal Index 50.1; MedScribe 84.1

Long context:

- AA-LCR v1.1 **75.7%**; no RULER/MRCR curve published, and the served window (262K) is well below the 1M marketing claim.

### Normalized scores (1–100)

- **Tool use: 64/100.** SWE-bench Verified 82.2% (Vals), MCP Atlas 79.6% and BrowseComp 77.4% are strong, but τ³-Banking 15.5%, Terminal-Bench 4.0 ~0–1% and the mid Vals Index hold it mid-tier.
- **Reasoning: 80/100.** GPQA Diamond 83.6–89.5% and AIME 95.5% are near-frontier, and HLE 47.8% with tools is solid; ARC-AGI-2 40.1%, CritPt 8.3% and AA index 26 (rebased) cap it.
- **Context window: 82/100.** Adjusted down from 95: the official 1M claim is not what is served — Vals 262K, Tinker 256K extended, AA 256K — so it sits at the top of the 200K–500K band rather than the ≥1M tier.
- **Multimodal: 90/100.** Text, image **and audio** input → text out is the `+audio in` band (90–100); MMMU-Pro 74.0%, MMAU 77.0% and VoiceBench 90.1% back genuine cross-modal capability, though the Vals Multimodal Index 50.1 keeps it at the floor.
- **Coding: 72/100.** SWE-bench Verified 82.2% and LiveCodeBench 85.93% are strong, but Vibe Code Bench 19.05%, SciCode 49.7% and ProgramBench 0.5% cap end-to-end coding.
- **Cost efficiency: 93/100.** $0.30 in / $1.20 out per 1M (~$0.10/$0.20 = 97–99 band, adjusted for output rate and the $0.45 routes).
- **Overall Score: 78/100.** (64 + 80 + 82 + 90 + 72) / 5 = 77.6 → **78**. Best-fit: open-weights multimodal (audio-capable) model for reasoning at a low price — but budget for the real ~256K served window, not the 1M claim.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: deep second-pass public internet research (Thinking Machines model card + news, Hugging Face card, Tinker model catalog, Artificial Analysis launch article + model page, Vals AI, BenchLM, NanoGPT). Vendor self-harness rows were compared against independent Vals/AA runs; the context-window spread, AA-index rebase and vendor-vs-independent GPQA/Terminal-Bench gaps are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
