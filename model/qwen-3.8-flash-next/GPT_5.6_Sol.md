# Qwen3.8-Flash-Next — findings by GPT 5.6 Sol

- Source: Alibaba Qwen (`Qwen/Qwen3.8-Flash-Next`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** Alibaba's experimental open-weight multimodal MoE and preview of the architecture intended for Qwen4, optimized for high capability at only 6B active parameters.
- **Provider / access:** Self-hosted weights plus hosted routes including Vercel AI Gateway `alibaba/qwen3.8-flash-next`; provider limits and prices vary.
- **Release / knowledge:** Released 2026-08-26; knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.8-Flash-Next`, `alibaba/qwen3.8-flash-next`; no verified Zen Free ID.
- **Context window:** 262,144 tokens natively; some hosted routes advertise a 1,048,576-token extension. Limits are provider-dependent.
- **Modalities:** Text, image, and video input; text output; reasoning, tool calling, and structured output supported.
- **Pricing (as of 2026-10-05):** Open weights for self-hosting; [Vercel AI Gateway](https://vercel.com/ai-gateway/models/qwen3.8-flash-next) lists $0.12/M input, $0.40/M output, and $0.01/M cached input for its route.
- **Architecture:** Open-weight sparse MoE, 125B total / 6B active parameters, Qwen Community 1.0 license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.1%** (Artificial Analysis independent run summarized with source tracking by [The Model Gap](https://themodelgap.com/models/qwen3-8-flash-next)).
- Toolathlon Verified: **73.5%** Pass@1 (Alibaba vendor report).
- CoWorkBench: **73.9%**; AndroidWorld: **84.5%** (Alibaba model-card results).
- Tau3-Banking / Tau2-Bench, GDPval-AA, Claw-Eval / ClawProBench, MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **92.3%**; HLE: **38.0%** (Artificial Analysis runs).
- LiveBench overall: **76.2** (independent leaderboard result).
- LCR / MLCR, CritPt, Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Pro: **62.5%**; SWE-bench Multilingual: **81.0%** (Alibaba model card).
- DeepSWE v1.1: **58.7%** (Alibaba vendor run).
- LiveCodeBench, SciCode / AA-SciCode, Vibe Code Bench: no verified public score found.

Long context:

- No verified public long-context retrieval score found; native published capacity is 262K and hosted extensions vary.

### Normalized scores (1–100)

- **Tool use: 91/100.** Independent Terminal-Bench 2.1 at 86.1 plus Toolathlon 73.5 and AndroidWorld 84.5 show unusually broad agency, capped by vendor dependence for several rows.
- **Reasoning: 88/100.** GPQA 92.3 is excellent while HLE 38.0 and LiveBench 76.2 keep it below the frontier ceiling.
- **Context window: 91/100.** Native 262K is large and some routes extend to 1M, but no full-window retrieval score was found.
- **Multimodal: 86/100.** Text, image, and video input plus AndroidWorld 84.5 provide meaningful multimodal evidence; output remains text-only.
- **Coding: 88/100.** SWE-bench Pro 62.5 and multilingual 81.0 are strong, while DeepSWE 58.7 shows a lower long-horizon ceiling.
- **Cost efficiency: 98/100.** Open weights and a hosted route at $0.12/$0.40 per million tokens are exceptional value, excluding self-hosting infrastructure.
- **Overall Score: 89/100.** Half-up mean of the five non-cost dimensions; best suited to efficient self-hosted or low-cost multimodal agent and coding workloads.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-05
- Method: Fresh public internet research cross-checking independently tracked and vendor-reported rows; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
