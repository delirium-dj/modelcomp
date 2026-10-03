# Ling-3.0-flash-VL — findings by Kimi K3

- Source: InclusionAI / Ant Group (`inclusionAI/Ling-3.0-flash-VL`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-flash-VL
- **Short description:** InclusionAI's native multimodal extension of Ling-3.0-flash — visual information wired into understand/reason/act/verify loops (image + video in), built for agentic workflows with extreme parameter efficiency.
- **Provider / access:** Open weights (MIT) on Hugging Face (`inclusionAI/Ling-3.0-flash-VL`); free chat on HuggingChat; HF Inference Provider: Novita. Serve via SGLang/vLLM (cookbook on docs.sglang.io). NOT listed on OpenCode Zen as of research date.
- **Release / knowledge:** Model card released circa Sept 2026 (HF active development; 14.9k downloads last month, 118 likes). Knowledge cutoff not disclosed.
- **IDs:** `inclusionAI/Ling-3.0-flash-VL` (HF). No Zen ID.
- **Context window:** 256K tokens total (`--context-length 262144` with YaRN factor 2.0 over 131,072 base positions, per official card; an open HF discussion confirms 256k vs 131k base). Max output not separately published.
- **Modalities:** Text + image + video in; text out. Thinking mode on by default (chat-template toggle `enable_thinking`); tool-call parser supported (`ling3`). No audio.
- **Pricing (as of 2026-10-02):** Open-weights MIT — free to self-host; free chat on HuggingChat. No verified per-token API price at authoring time (Novita hosting listed but unpriced on the card).
- **Architecture:** 124B total / 5.5B active sparse MoE (`bailing_moe_v3_vl`), 42-layer hybrid backbone alternating KDA and Gated MLA at 5:1, ViT + 2-layer MLP projector, VideoRoPE for temporal video understanding. MIT license.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA (normalized): **32.5%** (Artificial Analysis via benchlm.ai/models/ling-3-0-flash-vl, verified 2026-10-02)
- Terminal-Bench 2.1: official card shows a methodology note (AA protocol, Terminus 2 harness, 2h timeout, 3-run mean, 256K window) but the value itself appears only in an image — not text-extractable → no verified public score found.
- Tau3 / Tau2 / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- AA-GPQA Diamond: **86.2%**
- AA-HLE: **22.0%**
- AA-LCR (long-context reasoning): **78.3%**
- CritPt: **2.0%**
- Artificial Analysis Intelligence Index: **24.6** (current AA v4.3.2 per benchlm aggregation); **42** on the older AA v4.1.1 (official card, "+4 over Ling-3.0-flash's 38").
- AA-Omniscience: Index **-4.5** / Accuracy **14.4%** / Hallucination Rate **22.0%** — weak knowledge reliability.
- MLCR: no verified public score found.

Coding:

- AA-SciCode: **44.2%**
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench / DeepSWE / SWE-Atlas: no verified public score found.

Multimodal:

- AA-MMMU-Pro (visual reasoning): **79.0%**; BenchLM composite overall: **47.66/100 (#105/783)**.

Long context:

- AA-LCR 78.3% (above, at the 256K window) — no separate MRCR/RULER/GraphWalks number published.

### Normalized scores (1–100)

- **Tool use: 60/100.** Only GDPval-AA 32.5% is verified (mid-lower band); the card's TB2.1 number is image-only so it can't be counted. Vendor's UI-acting ("Act") claims are unquantified. Capped by missing Tau3/TB numbers.
- **Reasoning: 72/100.** GPQA 86.2% approaches the frontier band, AA-LCR 78.3% is strong, but HLE 22%, CritPt 2.0% and a -4.5 Omniscience Index (22% hallucination) cap it below the 80s.
- **Context window: 74/100.** 256K window (200K–500K tier, 65–84), lifted modestly by a measured AA-LCR 78.3% at depth; no 512K+ evidence.
- **Multimodal: 82/100.** Native image + video in, text out (methodology +video band 75–90), MMMU-Pro 79.0% verifying real visual strength; not higher because text is the only output modality.
- **Coding: 70/100.** SciCode 44.2% in the methodology's mid band; agentic coding indirectly supported; capped by no SWE-bench Verified / LiveCodeBench figures.
- **Cost efficiency: 85/100.** MIT open weights (self-host ≈ marginal cost) + free HuggingChat access, but no verified $0 production ID and no measured per-task cost; scored conservatively below a true $0 tier (100).
- **Overall Score: 72/100.** Half-up mean of (60 + 72 + 74 + 82 + 70) / 5 = 71.6 → 72. Best fit: open, efficient multimodal agent brains (image/video grounding) for self-hosted stacks; not for knowledge-critical or pure frontier-coding duty.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-02
- Method: public internet research (huggingface.co/inclusionAI/Ling-3.0-flash-VL model card; benchlm.ai/models/ling-3-0-flash-vl, whose rows cite artificialanalysis.ai model benchmarks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
