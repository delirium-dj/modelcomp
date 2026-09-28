# Qwen3.8-Max — findings by Pixel Canary

- Source: Alibaba Cloud / Qwen Team / Qwen3.8 Max (`alibaba/qwen3-8-max`, also `qwen3.8-max`, `qwen/qwen3.8-max`, `accounts/fireworks/models/qwen3p8-max`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max — Alibaba's open-weight MoE flagship with always-on thinking, the strongest *measured* computer-use and instruction-following profile in this dataset.
- **Short description:** The value leader of the frontier tier: $2 / $6 for an open-weight model that tops OSWorld-Verified (86.10%, #1/26), AndroidWorld (85.30%) and IFBench (82.80%, #1/42), i.e. it is the best agent at driving real screens and at obeying complex instructions — with a 256K native window extensible to ~1M.
- **Provider / access:** Alibaba API; **35 tracked offerings** incl. Fireworks AI, Abacus and NanoGPT at $2 / $6 (with windows ranging 256K–1M depending on host); cheapest route **$1.60 / $4.80 (Vancine)**. Open weights under the Qwen3.8-Max License, so self-hosting is viable.
- **Release / knowledge:** released 2026-08-02; knowledge cutoff **not published** (LLMBoard lists Unknown) — no verified public figure.
- **IDs:** `alibaba/qwen3-8-max`, `qwen3.8-max`, `qwen/qwen3.8-max`. No Zen Free ID — local `meta.json` records a one-time 1M-token free quota instead.
- **Context window:** 1M advertised; the specification block lists a **262,144-token native** window with **256K max output**, and the DeepInfra runtime row confirms 256K/256K — so the 1M figure is an extension (e.g. YaRN-style) rather than the trained length. Hosts vary: Fireworks 262.1K, NanoGPT 991K, Abacus 1M.
- **Modalities:** image, text and video in; text out. Tool use, computer/mobile use and always-on thinking yes; no audio input, no generation. Matches local `meta.json` ("Text, image, video in; text out").
- **Pricing (as of 2026-09-27):** official Alibaba **$2 / 1M input, $6 / 1M output** (flat), floor $1.60 / $4.80 (Vancine); cache-read and batch rates not tracked (no verified public figure). One-time 1M-token free quota per local `meta.json`.
- **Architecture:** **open weights** (Qwen3.8-Max License). Parameter count is reported inconsistently: the specification block and local `meta.json` say **2.4T total**, while the same page's prose says a **4T-total / 95B-active** checkpoint. Both figures come from one aggregator; treat MoE scale as unverified.

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-09-27): 30 of 63 rows published, coverage **80% / 33 benchmark families**; "#x/y" = rank among models with a published score. **Important:** a large share of this model's "#1" ranks are in 1–3-participant fields (Alibaba-internal benches), which carry no ranking value — those are marked ⚠ below. Composite: LLMBoard **86.0**.

Agent / tool use (the strongest area, with real fields):

- OSWorld-Verified (computer use): **86.10%** (#1/26) — first place over a genuine 26-model field, ahead of Claude Opus 4.8's 83.40%
- AndroidWorld (mobile agent): **85.30%** (#1/8); ERQA **77.80%** (#1/28); SkillsBench **70.20%** ⚠(#1/1)
- CoWorkBench: **74.80%** (#1/6); AndroidBench **75.10%** ⚠(#1/1); MobileWorld **77.80%** ⚠(#1/3)
- GDPval-AA, Terminal-Bench, DeepSWE, MCP Atlas, tau-bench family: no verified public score found

Reasoning / knowledge:

- IFBench: **82.80%** (#1/42) — best instruction-following in a 42-model field, the most convincing reasoning-family rank here
- LongBench v2: **66.30%** (#1/18); PaperBench **93.00%** ⚠(#1/3); PerceptionBench **63.50%** ⚠(#1/2)
- Domain benches are all single-participant: PLawBench **73.20%** ⚠(#1/1), PRBench-Finance **58.30%** ⚠(#1/1), PRBench-Legal **57.60%** ⚠(#1/1)
- GPQA / HLE / Omniscience / SimpleQA rows for this ID: not present in the extracted rows — no verified public score found

Coding:

- QwenSWEBench: **80.70%** ⚠(#1/2); QwenQoderBench **58.40%** ⚠(#1/1); QwenReactBench **1,724.00 points** ⚠(#1/1); QwenSVG **1,713.00 points** ⚠(#1/2)
- SWE-bench Verified / SWE-Bench Pro / LiveCodeBench / Terminal-Bench: **no third-party coding row is published for this ID** — every coding figure available is from an Alibaba-authored benchmark with 1–2 participants.

Long context:

- LongBench v2 **66.30%** (#1/18) is the only long-context measurement; no MRCR / RULER / GraphWalks row exists, and the native window is 262K.

Runtime: the only runtime record is **DeepInfra at 8.47 tok/s** with **7.33 s** latency (256K/256K) — an unusually slow host, and no first-party Alibaba speed is published, so throughput is effectively unverified.

### Normalized scores (1-100)

- **Tool use: 92/100.** OSWorld-Verified 86.10% (#1/26) is the best measured desktop-agent score in this dataset, with AndroidWorld 85.30% (#1/8) and ERQA 77.80% (#1/28) in real fields - no other model here covers desktop **and** mobile; docked because GDPval/Terminal/DeepSWE/MCP rows are absent.
- **Reasoning: 82/100.** IFBench 82.80% (#1/42) and LongBench v2 66.30% (#1/18) are earned against real competition, but the finance/legal/perception results all come from 1–2-participant internal sets and no GPQA/HLE/Omniscience row exists, so breadth of reasoning is asserted more than demonstrated.
- **Context window: 78/100.** Advertised 1M but **262,144 native** with 256K output, hosts ranging 256K-991K-1M, and only one long-context measurement (LongBench v2 66.30%) - the window is the weakest of the frontier-tier entries here.
- **Multimodal: 82/100.** Image, text and video in with ERQA 77.80% (#1/28) and the single-field PerceptionBench 63.50% as evidence; no audio input, text-only output.
- **Coding: 72/100.** QwenSWEBench 80.70% is encouraging, but **every** coding row available is authored by the vendor with 1–2 participants - no SWE-bench Verified/Pro, LiveCodeBench or Terminal-Bench number exists, so coding cannot be placed against Claude Opus 4.8 or Muse Spark 1.3.
- **Cost efficiency: 94/100.** $2 / $6 flat with a $1.60 / $4.80 router floor, 35 providers and an open-weight escape hatch is exceptional value; docked only because the sole measured host runs at 8.47 tok/s and no cache pricing is published.
- **Overall Score: 81/100.** Half-up mean of (92 + 82 + 78 + 82 + 72) = 406 / 5 = 81.2 → recorded as **81**, Cost excluded. Divergence note: the independent LLMBoard composite is 86.0, and it is inflated - most of this model's #1 ranks sit in 1–3-participant vendor-authored fields, which the tracker's coverage maths treats as evidence. Best fit: GUI/mobile/computer-use automation and strict instruction-following at very low cost, especially self-hosted; for verified repository coding, Claude Opus 4.8 or Muse Spark 1.3 remain safer bets.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. the provider pricing and runtime tables; 30 of 63 rows are published and only retrievable rows are cited, with single-participant vendor benchmarks explicitly flagged) + local `meta.json`; no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
