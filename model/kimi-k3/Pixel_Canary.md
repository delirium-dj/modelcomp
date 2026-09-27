# Kimi K3 — findings by Pixel Canary

- Source: Moonshot AI / Kimi K3 (`moonshotai/kimi-k3`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 — Moonshot AI's open-weight Mixture-of-Experts flagship for coding, knowledge work and reasoning (Kimi Delta Attention + Attention Residuals + Stable LatentMoE, always-on reasoning).
- **Short description:** The strongest *open-weight* model in the dataset (LLMBoard 87.4, coverage 80% / 26 families): frontier document/vision scores and a 1M-token input **and** output window, undercut only by its extremely slow 3.44 tok/s hosted endpoint.
- **Provider / access:** Moonshot AI API (`kimi-k3`); 73 tracked offerings incl. Nebius Token Factory (`moonshotai/Kimi-K3`), CrossModel (`moonshot/kimi-k3`), OpenCode Go, Vivgrid at list; cheapest third-party route $2 / $10 (NanoGPT). Weights are public under the Kimi K3 License, so self-hosting is an alternative to every hosted price.
- **Release / knowledge:** released 2026-07-16; knowledge cutoff **not published** (LLMBoard lists Unknown) — no verified public figure.
- **IDs:** `moonshotai/kimi-k3`, `kimi-k3`, `moonshot/kimi-k3`, `moonshotai/Kimi-K3`. No Free ID — paid (or self-hosted).
- **Context window:** 1,048,576 (1M) input / **1M max output** tokens (LLMBoard runtime + specification rows) — the only model in this cohort with a symmetric 1M/1M window.
- **Modalities:** text, image and video in; text out. Native image/video understanding, tool calling, structured output, always-on reasoning; no audio input, no image/video/audio generation. (Local `meta.json` lists "Text, image, document in" — the tracker additionally documents video input.)
- **Pricing (as of 2026-09-27):** official Moonshot $3.00 / 1M input, $15.00 / 1M output, cached input $0.30 / 1M; cheapest third-party route $2 / $10 (NanoGPT); Venice-style mark-ups above list elsewhere. Batch discounts not published (no verified public figure).
- **Architecture:** open weights (Kimi K3 License). Parameter count is reported inconsistently: LLMBoard's specification table says **2.8T** while its descriptive blurb says **8T total / 896 experts / 16 active**; local `meta.json` records 2.8T. Treat the MoE scale as unverified — both figures come from the same aggregator, and neither is a first-party citation obtained today.

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-09-27 unless noted): 30 of 50 rows published, coverage **80% / 26 benchmark families**; "#x/y" = rank among models with a published score on that benchmark. Composite: LLMBoard **87.4**.

Agent / tool use:

- MCP Atlas (tool/MCP orchestration): **84.20%** (#2/36)
- DeepSearchQA: **95.00%** (#2/11); BrowseComp: **91.20%** (#3/67) — deep research strength
- APEX-Agents: **37.60%** (#2/10); AA-Briefcase: **1548.00 points** (#2/3)
- SpreadsheetBench 2: **34.80%** (#1/2 — thin field, treat cautiously); DECK-Bench **73.50%** (#1/1); MLS-Bench Lite **48.30%** (#1/3)
- GDPval-AA, OSWorld 2.0, Terminal-Bench, tau-bench family: no verified public score found in the extracted rows

Reasoning / knowledge:

- MathVision: **97.80%** (#1/37) — top of a large field, the single most convincing reasoning datapoint
- AA LCR v1.1: **88.67%** (#1/193)
- CharXiv-R: **91.30%** (#2/58); Program Bench **77.80%** (#2/11); MMMU-Pro (with tools) **83.40%** (#2/4)
- GPQA / HLE / Omniscience for this ID: not present in the extracted rows — no verified public score found

Coding:

- FrontierSWE: **81.20%** (#2/16) — second only to the very top of a 16-model field
- Kimi Code Bench v2: **72.90%** (#1/2); Program Bench **77.80%** (#2/11)
- SWE-bench Verified / SWE-Bench Pro / LiveCodeBench / Terminal-Bench: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval score published for this ID; the 1M input and 1M max output are verified but unmeasured.

Runtime: **3.44 tok/s** with **9.81 s** catalog latency on Moonshot AI — the slowest endpoint in the entire comparison (Grok 4.5 is 80.0, Gemini 3.7 Flash 41.74), so long agent turns are wall-clock expensive even though tokens are cheap.

### Normalized scores (1-100)

- **Tool use: 90/100.** MCP Atlas 84.20% (#2/36) plus DeepSearchQA 95.00% (#2/11) and BrowseComp 91.20% (#3/67) is a genuine research-agent profile; APEX-Agents 37.60% (#2/10) shows enterprise workflow agents are still hard, and no OSWorld/Terminal evidence exists.
- **Reasoning: 86/100.** MathVision 97.80% over 37 competitors (#1) and AA LCR v1.1 88.67% over 193 (#1) are elite, but with no GPQA, HLE or Omniscience row published for this ID, factual-reliability cannot be verified, so it cannot score with Claude Opus 5.5 / Fable 5.1.
- **Context window: 92/100.** The only verified symmetric 1M-input **and** 1M-output window in the cohort, which matters for long agentic transcripts; capped because no MRCR/GraphWalks-class retrieval number exists for this ID.
- **Multimodal: 86/100.** Native image and video understanding backed by BabyVision 85.70% (#2/13), CharXiv-R 91.30% (#2/58) and OmniDocBench 91.10% (#1/2) - frontier document/vision, and the PerceptionBench 58.50% result is only 2 models deep; no audio input, no generation.
- **Coding: 86/100.** FrontierSWE 81.20% (#2/16) and Kimi Code Bench v2 72.90% (#1/2) are strong for an open-weight release, but no SWE-bench Verified/Pro or LiveCodeBench number exists to place it against Claude Opus 5.5's 89.90%.
- **Cost efficiency: 82/100.** $3 / $15 with $0.30 cached reads and a $2 / $10 third-party route, plus the open-weight escape hatch across 73 offerings; docked sharply for 3.44 tok/s, which dominates real latency cost.
- **Overall Score: 88/100.** Half-up mean of (90 + 86 + 92 + 86 + 86) = 440 / 5 = 88.0, Cost excluded. Cross-check: the independent LLMBoard composite is 87.4, within 1 point. Best fit: self-hosted or cost-sensitive document, research and vision-heavy agent pipelines that need a 1M-token output budget.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. provider pricing and runtime tables + local `meta.json` for pricing/free-tier notes); no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
