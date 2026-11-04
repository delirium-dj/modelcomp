# Nemotron 3.5 Bolt 74B-A9B — findings by Qwen 3.8 Flash

- Source: NVIDIA (`nvidia/nemotron-3.5-bolt-74b-a9b`), cross-checked against Artificial Analysis and eigent/NVIDIA launch coverage
- Date: 2026-10-17 / second pass 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B
- **Short description:** NVIDIA's first "Bolt" family model (Oct 2026) — a 74B/9B-active open-weight MoE with native vision, engineered to run locally in 24 GB via 2-bit/NVFP4 quantization. Currently the #1 US open-weight model under 100B params on the AA Intelligence Index (21.4).
- **Provider / access:** Open weights (Hugging Face / ModelScope / NIM); NVIDIA hosted free tier on build.nvidia.com; local via vLLM/SGLang/Ollama/LM Studio on GeForce RTX, Jetson, DGX Spark. Chat Completions.
- **Release / knowledge:** 2026-10-15 release; knowledge cutoff not announced.
- **IDs:** `nvidia/nemotron-3.5-bolt-74b-a9b` (Bolt E4B is a separate smaller sibling).
- **Context window:** 256,000 tokens (Artificial Analysis model details); max output not separately published.
- **Modalities:** text + vision (image) in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-17):** open weights (self-host free, incl. a $0 NVIDIA hosted tier); per-token paid rates on partner hosts not confirmed in this pass.
- **Architecture:** 74B total / 9B active MoE, native 2-bit quantization to fit 24 GB, hybrid attention; ~39% fewer total params than Nemotron 3 Super yet +8.6 AA points.

### Raw benchmarks found

> Primary independent source: Artificial Analysis (Intelligence Index + named evals).
> Vendor claims (PinchBench #1-in-class, BrowseComp #2) noted but not independently
> reproduced. Several absolute coding rows are chart-only on AA.

Agent / tool use:

- AutomationBench-AA: **15.5%** (AA; vs Nemotron 3 Ultra 3.0%)
- AA-Briefcase: **912 Elo** (AA; vs Ultra 874)
- PinchBench: **#1 open model in its class**; BrowseComp: **#2** (NVIDIA vendor claim, unreproduced)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **21.4** (AA; 4th among <100B-param models, 1st among US models in that class)
- Humanity's Last Exam: **25%** (AA; trails Nemotron 3 Ultra 28%)
- Token usage: **82k output tokens / Intelligence-Index task** (AA; 1.8× Super VL, 28% fewer than Nemotron 3 Super)

Coding:

- AA-LCR (long-context reasoning): **70%** (AA; trails Ultra 79%)
- SWE-bench Verified / LiveCodeBench: **no verified public score found** for this exact ID in AA/vendor copy reviewed

Long context / vision:

- 256K window; vision+text input confirmed (AA); **no MRCR/RULER retrieval score published**.

### Normalized scores (1–100)

- **Tool use: 66/100.** Leads AutomationBench-AA and AA-Briefcase (even beating Ultra 550B on the former) and claims #1-in-class PinchBench — impressive for a 24 GB local model — but vendor-only BrowseComp/PinchBench and modest absolutes cap it.
- **Reasoning: 60/100.** AA Index 21.4 makes it the top US sub-100B open model, yet HLE 25% and the 82k-tokens/task cost show it's efficient-class rather than frontier reasoning.
- **Context window: 66/100.** 256K is a solid working window for a local deployment (well above the 128K tier) but a generation below the 1M-class leaders, with no long-context retrieval score published.
- **Multimodal: 55/100.** Native vision + text input (AA-confirmed) is a real plus over text-only peers at this size, but text-only output and no audio/video keep it mid-range.
- **Coding: 63/100.** Local coding/research mandate with competitive AA-LCR 70%, but it trails Nemotron 3 Ultra on long-context reasoning and has no reproduced SWE-bench absolute — provisional ceiling.
- **Cost efficiency: 92/100.** Open weights, 24 GB 2-bit footprint, and a free hosted tier make it exceptionally cheap to run for a vision-capable MoE in its class.
- **Overall Score: 62/100.** Half-up mean of the five quality dims (66+60+66+55+63)/5 = 62. Best fit: private, low-VRAM local vision+coding agents where a 24 GB self-hosted checkpoint and permissive license outweigh frontier absolute scores.

---

## Second-pass update — 2026-11-04 (UTC)

- Sources checked this pass: artificialanalysis.ai/models/nemotron-3-5-bolt-74b-a9b (fetched — model page live, text+image, 262K context, 74B/9B MoE, OpenMDW-1.1, reasoning. Intelligence Index listed but detailed benchmark sections show “No publicly available API” for many metrics — model only 20 days old, AA coverage incomplete); blogs.nvidia.com/blog/nemotron-3-5-super-vl (NVIDIA launch blog — confirms Bolt 74B-A9B + Super VL released Oct 15, 2026); mindstudio.ai (Oct 17 — hands-on tests “sharp but uneven,” vision strong but coding shaky; no new absolute benchmark rows published); huggingface.co/DavidAU (community quantization page confirms SWE-bench Verified/Gym listed but no numeric score for 74B-A9B); scale.com/leaderboard (shows Nemotron 3.5 Bolt E4B at 56.03 but that's the smaller E4B sibling, not 74B-A9B).
- Trigger evaluated: “an independent Artificial Analysis / third-party re-run of gemma-4-26b-a4b (esp. confirming the low Terminal-Bench-Hard and MRCR figures), or clarification of whether this serving variant exposes the Gemma 4 audio-input lane” → Wait, that was for gemma. For this model: pass-1 has no explicit trigger. Checking for new independent data: AA Index 21.4 still the primary signal (no new numeric GPQA/SWE rows published for this ID since Oct 17). Trigger N/A (none set in pass-1).
- Lifecycle: open weights (OpenMDW-1.1), released Oct 15, 2026 (20 days). Very new, no retirement risk. Still in early-coverage phase on AA.
- Pricing: free open weights, NVIDIA hosted free tier (build.nvidia.com). Partner paid rates still not confirmed (20 days post-release). No change from pass-1.
- Bands unchanged: Tool 66 / Reasoning 60 / Context 66 / Multimodal 55 / Coding 63. Overall remains **62/100**.
- Verdict: pass-1 holds. Confirmation pass — model too new (20 days) for independent benchmark coverage expansion. No lifecycle risk. AA page partially populated.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-17
- Method: public internet research — Artificial Analysis "NVIDIA Releases Nemotron 3.5 Super and Bolt" article/model page, NVIDIA launch blog and eigent explainer; scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04. Confirmation pass. 20-day-old open-weight model; AA coverage incomplete, no new independent rows. Bands unchanged.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
