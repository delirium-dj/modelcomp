# Qwen3.8-Max — findings by DeepSeek 4.1 Flash

- Source: Alibaba Cloud (Qwen team) / Qwen3.8-Max (`qwen3.8-max-0902`)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-10-06)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> Independent: Artificial Analysis Intelligence Index **45**, ~35.7 t/s, ~$5.41/index task; LMArena 1483 (#22). Vendor (QwenCloud / HF): Terminal-Bench 2.1 **86.6%** (Claude Code harness), SWE-bench Pro 67.7%, DeepSWE 1.1 56.6%, GPQA Diamond 92.6%, HLE 43.6% / 56.2% with tools, MMMU-Pro 82.3%, Toolathlon-Verified 72.5%, OSWorld-Verified 86.1%, MRCR v2 256K 8-needle 92.9%, VideoMME 90.4.
> **Conflicts surfaced:** (1) **modalities** — the Max cloud API is **image+video in**, but the open-weights `Qwen3.8-2.4T-A95B` checkpoint is **text-only, thinking-only**; (2) context 262,144 native / extensible to 1,010,000 (HF card, AA 984K) vs 1M hosted; (3) pricing $2/$6 official vs $1.65/$4.95 cheapest third party; (4) release Aug 2 (LLM Stats) / Aug 3 (Qwen/Wikipedia) / "September 2026" (AA 0902 snapshot); (5) **coding signal is mixed** — TB2.1 86.6% is near-frontier but DeepSWE 56.6% is well below the 74% ref, and TB2.1 uses a different harness than its baselines.
> Sources: https://qwen.ai/blog?id=qwen3.8 · https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B · https://www.qwencloud.com/models/qwen3.8-max · https://artificialanalysis.ai/models/qwen3-8-max · https://llm-stats.com/models/qwen3.8-max

## Model card

- **Name:** Qwen3.8-Max (dated checkpoint `qwen3.8-max-0902`)
- **Short description:** Alibaba Cloud's flagship 2.4T-parameter sparse MoE (~95B active), preview 2026-07-19, GA 2026-08-03; competes with OpenAI/Anthropic frontier models on reasoning and a 1M multimodal window at a flat $2/$6. No public safety/training model card.
- **Provider / access:** Alibaba Cloud Model Studio (hosted multimodal API); separate text-only open-weight checkpoint `Qwen/Qwen3.8-2.4T-A95B` (restricted custom licence).
- **Release / knowledge:** preview 2026-07-19; GA 2026-08-03; knowledge cutoff not published.
- **IDs:** `qwen3.8-max-0902`; open weights `Qwen3.8-2.4T-A95B`.
- **Context window:** 262,144 native, extensible to 1,010,000 (HF card); hosted Max ~1M (991,800 in / 131,072 out).
- **Modalities:** text, image and video input (hosted Max); text out; thinking/non-thinking modes; tools/structured output; no audio.
- **Pricing (as of 2026-10-09):** flat **$2.00 in / $6.00 out** per 1M; implicit cache $0.25; one-time 1M free quota (Singapore region).
- **Architecture:** sparse MoE, **2.4T total / 95B active**, hybrid Gated DeltaNet/Gated Attention, 512 experts (10 routed + 1 shared), MTP.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **86.6%** (Qwen, Claude Code harness); OSWorld-Verified **86.1%**; AndroidWorld 85.3%
- Toolathlon-Verified 72.5%; IFBench 82.8%; WideResearch 81.9%; Agents' Last Exam 52.4%; JobBench 53.4%
- LMArena multimodal: #2 globally (blind human preference)

Reasoning / knowledge:

- GPQA Diamond **92.6%** (Qwen; HF eval 92.6); HLE **43.6%** / HLE with tools 56.2%
- MMLU-Pro 88.6%; PaperBench 93.0; MRCRv2 **92.9%**; LongBench v2 66.3%
- Artificial Analysis Intelligence Index **45** — independent; Omniscience: no verified public score found

Coding:

- SWE-bench Pro **67.7%** (Qwen); DeepSWE 1.1 **56.6%** (below the 74% ref); FrontierSWE 73.5%
- NL2Repo 55.9%; MLS-Bench Lite 41.0%; VulcanBench v3 81.2%; FrontierSWE v2 15.8%
- SWE-bench Verified / SciCode / Vibe Code Bench: **no verified public score found**

Multimodal:

- MMMU-Pro 82.3%; MathVision 95.2%; CharXiv 93.5%; ScreenSpot-Pro 84.5%; VideoMME (subs) **90.4**; VideoMMMU 88.7%; LVBench 81.8%

Long context:

- MRCRv2 92.9% and LongBench v2 66.3% (Qwen); no RULER/GraphWalks.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.1 86.6%, OSWorld-Verified 86.1%, IFBench 82.8% and a #2 multimodal arena rank make it a capable agent; capped by no Tau3/GDPval/Claw results and 36 t/s throughput.
- **Reasoning: 85/100.** GPQA 92.6% and PaperBench 93.0 are strong; HLE 43.6% and the independent AA Index of 45 show a gap to the frontier.
- **Context window: 96/100.** Full 1M hosted window with 131K output and MRCRv2 92.9%; native context is 262K and no full-window retrieval benchmark exists.
- **Multimodal: 85/100.** Text + image + video input with a #2 global arena placement and MMMU-Pro 82.3%; no audio, text-only output, and the open-weights checkpoint is text-only.
- **Coding: 81/100.** SWE-bench Pro 67.7% and TB2.1 86.6% pull in opposite directions; DeepSWE 56.6% and FrontierSWE v2 15.8% keep it mid-band.
- **Cost efficiency: 84/100.** Flat $2/$6 per 1M across a 1M window undercuts frontier rivals; no permanent free tier and 36 t/s raises per-task wall-clock cost.
- **Overall Score: 86/100.** (85 + 85 + 96 + 85 + 81) / 5 = 86.4 → 86. Best fit: large-context multimodal agent/document workloads needing frontier-adjacent tool scores at a fraction of frontier per-token prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (Qwen blog, HF model card, QwenCloud model page, Artificial Analysis model page, LLM Stats, LMArena). The hosted-vs-open-weights modality split and the mixed coding signal are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
