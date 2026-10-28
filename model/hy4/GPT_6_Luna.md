# Hy4 Preview — findings by GPT-6 Luna

- Source: Tencent Hy Team/Hy4 Preview (`tencent/Hy4-preview`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 Preview
- **Short description:** Tencent Hy Team's open-weight flagship MoE for coding agents, tool workflows, and productivity tasks. The roster slug `hy4` identifies the official checkpoint named Hy4 Preview.
- **Provider / access:** Hugging Face weights `tencent/Hy4-preview`; serve with vLLM or SGLang using an OpenAI-compatible API.
- **Release / knowledge:** Released 2026-08-28; cutoff not stated.
- **IDs:** `tencent/Hy4-preview` and FP8 checkpoint `tencent/Hy4-preview-FP8`.
- **Context window:** 1,000,000 tokens; maximum output 64,000 per model card.
- **Modalities:** Text input and output; reasoning and tool calls supported. No image/audio/video input documented for this checkpoint.
- **Pricing (as of 2026-10-28):** Open weights; local inference costs depend on hardware. Hosted prices vary; OpenCode Go listing is $0.834 input / $2.501 output per million tokens, cited only as a third-party hosted route.
- **Architecture:** 770B total / 49B active MoE; 78 layers, 256 routed experts and one shared expert, top-8 routed experts; Apache 2.0 license.

### Raw benchmarks found

Hugging Face model-card evaluation results and Tencent's internal blind comparison are reported separately; provider/harness settings vary.

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (Hugging Face evaluation result).
- Toolathlon Verified: **74.1** (Hugging Face evaluation result).
- Apex Agents: **37.1**; SkillsBench v1: **62.9** (Hugging Face result listings).
- Tencent blind side-by-side on 203 internal engineering tasks: Hy4 Preview average **2.99**, vs GLM 5.3 at 2.92 (46.8% wins / 12.8% ties / 40.4% losses) and Kimi K3 at 2.94 (51.2% wins / 7.9% ties / 40.9% losses).

Reasoning / knowledge:

- GPQA Diamond: **92.3** (Hugging Face evaluation result).
- No verified HLE or Artificial Analysis Intelligence Index score found in the sources reviewed.

Coding:

- SWE-bench Pro: **65.7**.
- SWE-bench Multilingual: **82.9**.
- Terminal-Bench 2.1: **85.4**.

Long context:

- 1M context capacity; no MRCR/RULER/GraphWalks retrieval result found.

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 85.4 and Toolathlon 74.1 support strong agentic performance; capped for uneven public benchmark coverage and no independent broad agent index.
- **Reasoning: 90/100.** GPQA Diamond 92.3 is strong, but no second broad reasoning score was verified.
- **Context window: 90/100.** 1M capacity maps to the top range, with no retrieval accuracy result to justify a near-perfect rating.
- **Multimodal: 15/100.** The evaluated checkpoint is documented as text input/output only.
- **Coding: 90/100.** SWE-Pro 65.7, multilingual SWE-bench 82.9, and Terminal-Bench 85.4 are strong; benchmark provenance and harness variation cap the score.
- **Cost efficiency: 100/100.** The open Apache 2.0 weights permit self-hosting without per-token license fees; compute and infrastructure costs remain.
- **Overall Score: 75/100.** Half-up mean of the five quality dimensions (89+90+90+15+90)/5 = 74.8; best suited to self-hosted text coding/agent work, not multimodal use.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public web research using Tencent's Hugging Face model card and Tencent's stated internal evaluation. Normalized scores are independent interpretations.
- Sources: [Tencent Hy4 Preview model card](https://huggingface.co/tencent/Hy4-preview); [OpenCode Go model catalog](https://models.dev); [Tencent Hy GitHub](https://github.com/Tencent-Hunyuan/Hy4).
