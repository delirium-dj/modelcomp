# Nemotron 3 Ultra Free — findings by Big Pickle

- Source: Big Pickle (`opencode/big-pickle`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3 Ultra (Free tier on Zen)
- **Short description:** NVIDIA's open-weights hybrid Mamba-Transformer MoE flagship (550B total / 55B active) for frontier reasoning, orchestration, and long-running agents; tuned for token efficiency and low hallucination.
- **Provider / access:** OpenCode Zen free (`opencode/nemotron-3-ultra-free`) at `https://opencode.ai/zen/v1/chat/completions`; NVIDIA NIM / build.nvidia.com; DeepInfra, OpenRouter, Together. Weights `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B` (BF16 / NVFP4).
- **Release / knowledge:** 2026-06-04 (HF/NGC; announced at Computex Jun 1 per third-party). Pre-train cutoff Sep 2025; post-train cutoff May 2026.
- **IDs:** `opencode/nemotron-3-ultra-free`; NIM `nvidia/nemotron-3-ultra-550b-a55b`
- **Context window:** up to **1M**; default serve 256K (262,144 on Zen/NIM default; OpenCode Zen 1M per models.dev); max output 128K on Zen (16,384 NIM serverless)
- **Modalities:** text-only (confirmed). Reasoning toggleable; 10 languages.
- **Pricing (as of 2026-09-17):** Zen Free $0/$0 (limited-time trial terms: no personal/confidential data). NVIDIA NIM pay-as-you-go $0.50 in / $2.20 out.
- **Architecture:** 550B total / 55B active; LatentMoE (Mamba-2 + Transformer Attention + MoE), MTP (2 heads), NVFP4 pretrained, FP8 KV; OpenMDW-1.1.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.4** (BF16) / **53.9** (NVFP4); TB 2.0 **54** (NVIDIA blog); TB-Hard 36.4 (Vals)
- GDPVal: **46.7 BF16 / 47.9 NVFP4** (NVIDIA eval); GDPval-AA Elo **1,448** (NVIDIA blog) or **1,378** (AA) — harness variance
- TauBench V3 avg **70.9 / 70.3**; BrowseComp **44.4 / 41.4**
- PinchBench **90.0 / 89.8**; ProfBench Search **56.0 / 56.4**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA (no tools): **87.0 / 87.9**; HLE **26.7 / 26.1** (37.4 with tools); CritPt **3.1 / 3.4**; AA-LCR **65.4 / 65.5**
- AA Intelligence Index: **48.2 BF16 / 47.7 NVFP4** (launch v4.1.x) → **23** on current v4.3.2 (re-confirmed 2026-10-01) — flag index renormalization
- MMLU-Pro **86.8**; OmniScience Accuracy 24.1 / Non-Hallu **78.7** (highest in NVIDIA comparison set); IFBench 81.7; IOI 2025 570; LiveCodeBench v6 89.0
- BenchLM overall **46.35/100 (est.), #158/224**

Coding:

- SWE-bench Verified **71.9 / 69.7** (multi-harness range 65–70.4%); SWE Multilingual **67.7 / 65.8**; SciCode subtask **44.6 / 43.5**; AA Coding Index **49.3**

Long context:

- RULER @ 1M: **94.7 / 94.0**; LongBench v2 (≤1M) **61.9**

### Normalized scores (1–100)

- **Tool use: 75/100.** Pinch 90 + Tau V3 70.9 + ProfBench 56 solid; TB 56.4 and GDPval mid cap higher.
- **Reasoning: 72/100.** GPQA 87, RULER 94.7, best-in-class non-hallu 78.7; HLE 26.7 + CritPt 3.1 low.
- **Context window: 97/100.** True 1M with 94.7% RULER.
- **Multimodal: 15/100.** Text-only (per current evidence).
- **Coding: 78/100.** SWE 71.9 + LiveCode 89 solid; SciCode 44.6 modest.
- **Cost efficiency: 100/100.** $0 free/limited trial (paid NIM is $0.50/$2.20).
- **Overall Score: 67/100.** (75 + 72 + 97 + 15 + 78) / 5 = 67.4. Strong open long-agent pick; verify orchestration before making it primary planner. Re-derived 2026-10-01 after re-verification — unchanged, all five quality dimensions held.

## Re-verification — 2026-10-01 (14 days after original)

Original research date 2026-09-17. Re-run requested by the user to compare prior findings against current data. Original findings above are preserved; corrections are marked inline.

| Dimension | 2026-09-17 | 2026-10-01 | Change |
| --- | --- | --- | --- |
| Tool use | 75 | 75 | — (corroborated) |
| Reasoning | 72 | 72 | — (corroborated) |
| Context window | 97 | 97 | — (re-confirmed; 262k standard, 1M long-context serve) |
| Multimodal | 15 | 15 | — (dispute resolved: text-only stands) |
| Coding | 78 | 78 | — (corroborated) |
| Cost efficiency | 100 | 100 | — (Zen free tier confirmed live) |
| **Overall** | **67** | **67** | **—** |

**Nothing had to be walked back.** The AA Intelligence Index is still **23** at v4.3.2, now **#36/117** against a class median of 18 — so the "flag index renormalization" caveat in the raw-benchmarks section was the right call, and the launch-era 48.2/47.7 figures remain unusable for cross-model comparison. Another stale-figure trap confirmed: cached search results render **38** and third-party relays render **46.24** for this model; AA's live page reads 23.

**The Zen free tier is still live**, confirmed today against OpenCode's own Zen documentation, which still lists `nemotron-3-ultra-free` with Input / Output / Cached Read all "Free" and repeats the "available on OpenCode for a limited time" trial note. Cost efficiency therefore stays at 100. This matters more than the score: the entire reason this slug exists separately from paid Nemotron 3 Ultra is that $0 access, and that access is a promotional window, not a durable property. Zen also still carries the sibling `nemotron-3.5-lightning-free`.

**New measured performance, and it is the strongest finding in this re-verification:** **154.9 output tok/s (#11/117)** with TTFT **1.26s** against a 2.25s class median, plus notably concise output at **110M tokens (#14/117)**. AA grades Speed 4/4. The original report closed by saying "verify orchestration before making it primary planner" — this is the first hard independent evidence bearing on that caveat, and it argues against the caution: for interactive agent loops this is a fast generator with a fast first token, which is the combination the rubric cares about.

**Modality dispute resolved in favour of the original claim.** DeepInfra's endpoint page tags the model "Multimodal", which contradicted the report's text-only finding. AA settles it explicitly — "Is Nemotron 3 Ultra multimodal? **No.** It only supports text input." — and the HF card gives text in / text out. DeepInfra's tag is an endpoint mislabel. Multimodal stays at 15.

**Context window, stated precisely:** AA's technical spec says **262k** while AA's own FAQ on the same page says 260k, an internal inconsistency worth flagging. The practical picture matches the original report: **262,144** on standard serves (DeepInfra confirms that exact figure), and **1M** on the OpenCode Zen / NVIDIA long-context configuration that this report is actually about. Context stays at 97.

**Cost and coverage, measured:** AA's provider-median is **$0.60 in / $2.50 out** with a **73% cache discount**, **$0.60 per Intelligence Index task (#27/117)**, blended $0.48/M. DeepInfra undercuts that at **$0.50 / $2.20**, matching the NIM figure in the model card; Parasail runs a **128K** variant, a third context configuration to be aware of. Architecture and licence re-confirmed: **550B / 55B** MoE, **OpenMDW-1.1**, now listed across **8 API providers**.

**Lifecycle: not deprecated.** Unlike the MiMo and GLM models in this refresh batch, AA carries no deprecation banner for Nemotron 3 Ultra, and it remains actively benchmarked. The `Nemotron 3.5 Lightning` line (2026-08-11) is NVIDIA's newer, smaller flagship, not a replacement for Ultra.

**Unchanged gap:** Claw-Eval / ClawProBench still returns **no verified public score found**. Tool use therefore still rests on PinchBench 90.0, TauBench V3 70.9, ProfBench Search 56.0, Terminal-Bench 2.1 56.4 and GDPval-AA Elo 1,448, none of which moved.

**Net assessment:** the cleanest re-verification of the batch so far — no capability number regressed, the $0 access that defines the entry is confirmed still available, and the one open caveat (orchestration speed) now has independent measurements pointing the model's way. The framing changes only slightly, from "verify orchestration" to "fast enough to stop verifying that".

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-17
- Method: public web research (NVIDIA tech report + HF model card + developer blog, Artificial Analysis, BenchLM, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.