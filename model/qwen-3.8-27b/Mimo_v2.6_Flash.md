# Qwen3.8-27B — findings by Mimo v2.6 Flash

- Source: Alibaba (Qwen)/`Qwen3.8-27B`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba Qwen's compact 27B dense, natively multimodal (text/image/video in) open-weights model released 2026-08-14 under Apache 2.0, aimed at self-hosted coding agents and office workflows; it outperforms the hosted Qwen3.7-Plus on Qwen's own tables. Distinct from `qwen3.8-max` (2.4T MoE, bespoke licence) and from `qwen-3.8-flash`.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8-27b` (per folder `meta.json`, `noFreeId: true` — **no Zen Free ID**); open weights on Hugging Face `Qwen/Qwen3.8-27B` (+ `-FP8`) and ModelScope; served via vLLM/SGLang/llama.cpp and third-party hosts. OpenAI-compatible Chat Completions.
- **Release / knowledge:** 2026-08-14 (Hugging Face / GitHub / DataNorth); **Alibaba published no system card, training cutoff or safety eval** for this checkpoint.
- **IDs:** `Qwen/Qwen3.8-27B` (HF); `opencode/qwen-3.8-27b` on Zen.
- **Context window:** 262,144 native (GitHub/HF), extendable to 1,048,576 via YaRN; recommended 131,072-token cap on final responses for agentic workloads, 262K for reasoning tokens (AI/TLDR). YaRN is static and can reduce quality on short prompts.
- **Modalities:** text, image, video in; text out; thinking mode toggle (on by default) with multi-token-prediction speculative decoding; tool calls; JSON/structured output supported by the serving stack.
- **Pricing (as of 2026-09-25):** **no first-party metered API price published for the 27B at release** (Alibaba lists none, unlike Qwen3.8-Max at $2/$6 per 1M); Zen `meta.json` records "Open weights (Apache-2.0): self-hosting free, API provider pricing varies; no Free ID". Hosting cost is GPU rental: BF16 ≈ 51.8 GiB (≈68 GiB for full 262K on an 80GB card), FP8 ≈ 28.8 GiB.
- **Architecture:** 27.78B dense, 64 layers in a hybrid layout (48 Gated DeltaNet linear-attention blocks + 16 full-attention blocks) on the Qwen3.5 foundation, 5120 hidden, MTP head; **Apache 2.0** (licence file confirmed, not just card front matter).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.
> All rows below are from Alibaba's Qwen model card / GitHub release tables (Claude Code harness, temp 1.0, top_p 0.95, 256K context) unless another source is named; QwenSWEBench, CoWorkBench and JobBench are in-house and cannot be independently checked.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus): **73.0%** (Qwen model card; also listed on the Harbor/terminal-bench-2.1 leaderboard)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: text Claw-Eval no verified public score found; **ClawEval-MM (multimodal): Pass@3 57.4, Average 56.9** (Qwen card)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: **84.3%**; WebArena-Verified: **64.8%**; AndroidWorld: **81.9%** (Qwen card — computer/browser/mobile use)
- CoWorkBench (in-house): 70.7%; JobBench: 33.4%; RecreationBench: 47.1% (Qwen card)
- Agents' Last Exam: **Pass@1 20.4% / score 42.9** (Qwen card)

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (Qwen card; listed on the idavidrein/gpqa Diamond leaderboard)
- HLE (no tools): **30.8%** (Qwen card)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- IFBench (instruction following): 79.5% (Qwen card)

Coding:

- SWE-bench Verified: no verified public score found
- SWE-bench Pro: **61.7%** (Qwen card, Claude Code harness on a corrected task set — not directly comparable to unmodified runs)
- LiveCodeBench v6: **90.3%** (Qwen card — its highest-ranked text number, ahead of Opus 4.6 Max's 88.8 on the same table)
- DeepSWE 1.1: **42.2%** (Qwen card; also listed on the datacurve/deep-swe leaderboard)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- QwenSWEBench (in-house): 79.0%; NL2Repo-Bench: 42.3% (Qwen card)

Long context / multimodal (measured):

- Long-context retrieval: no MRCR / RULER / GraphWalks reported for 262K or YaRN-1M — **no long-context retrieval reported**
- MathVision: 90.0 without CI / **94.6 with CI**; OmniDocBench 1.5: **91.1**; RealWorldQA: **85.9**; CharXiv RQ: 83.7 / 90.2 with CI; BabyVision: 65.7 / 85.6 with CI; SWE-MM: 38.6; Vision2Web: 62.9 (Qwen card)

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong agentic-surface evidence — TB 2.1 73.0, OSWorld-Verified 84.3, AndroidWorld 81.9, WebArena 64.8, ClawEval-MM 56.9 — all above the mid band (TB 2.1 45–60 → 50–70) but short of the frontier reference (TB 2.1 ~88+, plus no Tau3 or GDPval number at all), and Agents' Last Exam Pass@1 is only 20.4. That gap between 73 and ~88 is what caps it below 80.
- **Reasoning: 80/100.** GPQA Diamond 89.2 is a point off the 90+ frontier reference and HLE 30.8 sits well above the mid band; capped by no LCR, CritPt or Intelligence Index figure, an HLE short of the 40+ frontier reference, and Alibaba's unpublished cutoff/system card.
- **Context window: 74/100.** 262,144 native is in the 200K–500K tier (65–84, 200K = 70) and scores at the upper-middle of it; the 1M YaRN extension is documented but static-YaRN quality loss on short prompts plus zero published retrieval accuracy (MRCR/RULER) keep it out of the ≥1M 95–100 band.
- **Multimodal: 85/100.** Text + image + video in with text out lands in the +video/PDF band (75–90); backed by OSWorld 84.3, OmniDocBench 91.1, MathVision 94.6 (with CI), RealWorldQA 85.9 and native hour-scale video input. Not higher because output is text-only and no audio in is documented.
- **Coding: 84/100.** LiveCodeBench v6 90.3, SWE-bench Pro 61.7, DeepSWE 42.2, TB 2.1 73.0 — clearly past the mid band and competitive with bigger models on Qwen's table, but short of the frontier references (TB 2.1 85+, DeepSWE 74+) and missing SWE-bench Verified, SciCode and Vibe Code Bench entirely.
- **Cost efficiency: 90/100.** Apache 2.0 open weights with no metered first-party API price = effectively free to self-host (the realistic cost is an 80GB-class GPU for BF16 at 262K, or FP8 on 24–48GB consumer cards); held just below the 97–99 band because there is no verified $0.10/$0.20-class hosted rate for this checkpoint yet.
- **Overall Score: 80/100.** (78 + 80 + 74 + 85 + 84) / 5 = 80.2 → 80 — best-fit as a self-hostable, Apache-2.0 coding + computer-use agent with real multimodal reach; choose it when you need local/air-gapped deployment, and step up to a frontier closed model for Tau/GDPval-class tool reliability or hardest-tier reasoning.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: fresh public internet research (Qwen/Qwen3.8-27B Hugging Face card and GitHub release repo, DataNorth and AI/TLDR write-ups, HokAI and AI Release Tracker summaries, Harbor/DeepSWE leaderboard listings); scores are normalized 1–100 interpretations, not official vendor scores. In-house Qwen benchmarks are labelled as such.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
