# Qwen 3.5 Plus — findings by LongCat 2.5 Preview

- Source: Alibaba/Qwen 3.5 Plus
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's closed-source hosted variant of the Qwen 3.5 family, featuring a 1M context window and MoE architecture (397B total / 17B active). Designed for agentic AI, multimodal reasoning, and cost-efficient production deployment.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen-3.5-plus-hosted-397b-a17b`). Open-weight 397B-A17B variant also available via Hugging Face / ModelScope.
- **Release / knowledge:** 2026-02-16 release.
- **IDs:** `qwen-3.5-plus-hosted-397b-a17b` (hosted Plus); `Qwen/Qwen3.5-397B-A17B` (open-weight)
- **Context window:** 991K tokens (Vals AI); up to 1M tokens. Max output 66K tokens.
- **Modalities:** text, image, video input; text output; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-02):** $0.40/1M input, $2.40/1M output (Vals AI). Earlier pricing: $0.26/1M input, $1.56/1M output (Feb 2026).
- **Architecture:** MoE — 397B total parameters, 17B active. 256 experts, 8 routed + 1 shared.

### Raw benchmarks found

Agent / tool use:

- BFCL v4 (Tool Use): **72.9%** (morphllm, open-weight 397B-A17B)
- Terminal-Bench 2.0: **41.57%** (Vals AI, Plus thinking)
- Terminal-Bench 2: **52.5%** (morphllm, open-weight 397B-A17B)
- APEX: **13.6%** (Epoch AI)

Reasoning / knowledge:

- GPQA Diamond: **87.37%** (Vals AI, Plus thinking); **88.4%** (morphllm, open-weight)
- MMLU: **88.5%** (morphllm, open-weight)
- MMLU-Pro: **87.18%** (Vals AI, Plus thinking); **87.8%** (morphllm, open-weight)
- AIME 2026 I: **91.3%** (morphllm, open-weight)
- AIME 2024/2025: **86.7%** (Epoch AI)
- FrontierMath: **21.0%** (Epoch AI)
- SimpleQA Verified: **25.4%** (Epoch AI)
- MathVista: **90.3%** (morphllm, open-weight)

Coding:

- SWE-bench: **71.20%** (Vals AI, Plus thinking)
- SWE-bench Verified: **76.4%** (morphllm, open-weight)
- LiveCodeBench: **85.33%** (Vals AI, Plus thinking)
- LiveCodeBench v6: **83.6%** (morphllm, open-weight)
- Vibe Code Bench: **15.74%** (Vals AI, Plus thinking)
- HumanEval: **~85%** (morphllm, open-weight)
- WebDev Arena: **1399** (Epoch AI)

Long context:

- No long-context retrieval benchmark (MRCR/RULER/GraphWalks) publicly reported for Qwen 3.5 Plus.

Multimodal:

- MMMU Pro: **22.77%** (Vals AI, Plus thinking — very low due to content filter sensitivity)

### Normalized scores (1–100)

- **Tool use: 65/100.** BFCL v4 72.9% (open-weight), Terminal-Bench 2.0 41.57% (Vals). Moderate tool-use capability; agentic performance lags behind frontier models. Capped by low Terminal-Bench scores.
- **Reasoning: 82/100.** GPQA Diamond 87.37%, AIME 91.3%, FrontierMath 21.0%. Strong knowledge and math reasoning; FrontierMath shows room for improvement on hardest research math.
- **Context window: 92/100.** 991K token context window with 66K max output. Among the largest available. No long-context retrieval benchmark publicly reported.
- **Multimodal: 55/100.** Text, image, and video input supported. MMMU Pro 22.77% (severely impacted by content filter sensitivity). Multimodal understanding is a relative weakness.
- **Coding: 68/100.** SWE-bench 71.20%, LiveCodeBench 85.33%, Vibe Code Bench 15.74%. Good LiveCodeBench but weak Vibe Code Bench and moderate SWE-bench. Capped by Vibe Code Bench score.
- **Cost efficiency: 92/100.** $0.40/1M input and $2.40/1M output — extremely cost-efficient for its capability tier. Among the best value propositions.
- **Overall Score: 72/100.** Mean of five quality dims (65+82+92+55+68)/5 = 72.4 → 72. Best fit: cost-efficient multimodal reasoning and knowledge work where agentic tool use is not the primary requirement.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
