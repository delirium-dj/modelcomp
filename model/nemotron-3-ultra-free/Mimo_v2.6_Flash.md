# Nemotron 3 Ultra Free — findings by Mimo v2.6 Flash

- Source: NVIDIA/`nemotron-3-ultra-550b-a55b` (Free tier)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA's most capable open-weights hybrid Mamba-MoE (550B total / 55B active, 2026-06) for frontier reasoning and long-running agents — high throughput, low hallucination, 1M RULER; Free via OpenCode Zen + NVIDIA trial.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3-ultra-free` (Chat Completions; **Free Zen tier**); NVIDIA NIM/build.nvidia `nvidia/nemotron-3-ultra-550b-a55b` (BF16 + NVFP4); HF `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-*`; trial on build.nvidia.com.
- **Release / knowledge:** 2026-06-04 (NVIDIA research page); technical report same era. Knowledge cutoff not restated in sources reviewed.
- **IDs:** `opencode/nemotron-3-ultra-free` (Zen Free); `nvidia/nemotron-3-ultra-550b-a55b`.
- **Context window:** **1M** native (meta: 1M / 262K default serve); RULER evaluated 64K→1M.
- **Modalities:** text in; text out (meta: beyond-text unverified — treat as **text-only** for scoring); tool calls yes; GenRM verifier variant available.
- **Pricing (as of 2026-09-22):** **Free Zen / NVIDIA trial** ($0 evaluated tier → cost 100). OpenRouter free endpoint also lists AA scores. Self-host open weights (license per HF card).
- **Architecture:** Sparse MoE hybrid **Mamba-Transformer, 550B total / 55B active**; BF16 + NVFP4 quantized checkpoints; open weights.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). NVIDIA NIM/NGC card + HF card (BF16 primary) + OpenRouter/AA rollup + tech report.

Agent / tool use:

- Terminal-Bench 2.1: **56.4%** (BF16) / **53.9%** (NVFP4) (NVIDIA NIM docs; trails GLM-5.1 59.3, Kimi-K2.6 67.2 on same card)
- Terminal-Bench Hard (AA): **36.4%** (OpenRouter/AA)
- GDPVal: **46.7** (NVIDIA, scale not Elo-normalized in card) / GDPval-AA **29.5%** (AA)
- SWE-bench Verified: **71.9%** (NVIDIA NIM BF16; NVFP4 69.7; HF variant table shows 70.7 BF16 — cite NIM 71.9)
- SWE-bench Multilingual: **67.7%** BF16 / 65.8 NVFP4 (NVIDIA)
- TauBench V3 average: **70.9** BF16 (Airline 81.5, Retail 86.4, Telecom 92.9, Banking 22.6) (NVIDIA)
- τ²-Bench Telecom (AA): **83.3%** (OpenRouter/AA)
- ProfBench (Search): **56.0** (NVIDIA)
- PinchBench: **90.0** (NVIDIA)
- BrowseComp: **44.4%** (NVIDIA) / AA? not separately cited
- Apex-Shortlist no/with tools: **74.9 / 84.8** (NVIDIA NGC comparison table)
- AA Agentic Index: **21.7** (OpenRouter/AA — low vs peers)
- Toolathlon / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA (no tools): **87.0%** BF16 / 87.9 NVFP4 (NVIDIA); AA GPQA Diamond **86.7%** (OpenRouter/AA)
- HLE (no tools): **26.7%** BF16 (NVIDIA) / AA HLE **28.4%**
- CritPt (no tools): **3.1%** (NVIDIA) / AA **3.1%**
- SciCode (subtask): **44.6%** BF16 (NVIDIA) / AA **40.3%**
- IOI 2025: **570.0** (NVIDIA — IOI scale)
- AA Intelligence Index: **23.4** (OpenRouter/AA reasoning variant — low vs 2026 frontier)
- AA-Omniscience Accuracy / Non-Hallucination: **22.6% / 70.3%** (AA)
- OmniScience Accuracy (NVIDIA): **24.1%**; Non-Hallucination **78.7%**
- IFBench (prompt): **81.7** BF16 (NVIDIA) / AA IFBench 81.4
- MMLU (base tech report): 87.82 (base, 5-shot) — base not post-trained chat

Coding:

- SWE-bench Verified: **71.9%** (see agent section)
- AA Coding Index: **49.3** (OpenRouter/AA — mid)
- DeepSWE / LiveCodeBench / Vibe Code Bench: no verified public score found for this ID

Long context:

- RULER 1M: **94.7** BF16 / 94.0 NVFP4 (NVIDIA — strong 1M needle suite)
- AA-LCR: **65.4** BF16 / **79.3%** (OpenRouter/AA LCR row) — mid-to-good long-context recall
- Context window up to 1M supported (NVIDIA research)

Multimodal:

- **Text-only** (meta: beyond-text unverified → template 15)

### Normalized scores (1–100)

- **Tool use: 74/100.** SWE-Verified 71.9, Tau3 avg 70.9 (strong Telecom/Retail), PinchBench 90, Apex-with-tools 84.8 are solid; TB2.1 56.4, GDPval 46.7/29.5%, AA Agentic Index 21.7 are clearly mid — not frontier terminal/agentic.
- **Reasoning: 76/100.** GPQA ~87 and IFBench ~82 are strong; HLE ~27, CritPt 3.1, AA Intelligence Index 23.4, Omniscience ~23% show real distance from 2026 frontier science breadth.
- **Context window: 96/100.** True 1M window with **RULER 1M 94.7** — excellent measured long-context suite; AA-LCR mid-60s–70s is the softer companion metric.
- **Multimodal: 15/100.** Text-only / unverified beyond text (template rule: 15).
- **Coding: 76/100.** SWE-Verified 71.9 is genuinely good open coding; AA Coding Index 49.3 and missing DeepSWE/LiveCode/Vibe rows cap mid-to-high 70s.
- **Cost efficiency: 100/100.** Free Zen + NVIDIA trial ($0 evaluated tier) = 100.
- **Overall Score: 67/100.** Mean of five quality dims (74+76+96+15+76)/5 = 67.4 → 67. Best-fit: free long-context (1M RULER-strong) text agents and SWE-Verified workloads where throughput/honesty matter more than max TB2.1/GDPval agentic ceiling.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (docs.api.nvidia.com NIM reference, HF NVIDIA-Nemotron-3-Ultra cards, research.nvidia.com Nemotron-3-Ultra page, NGC catalog card, OpenRouter free endpoint/AA scores, NVIDIA tech report PDF); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
