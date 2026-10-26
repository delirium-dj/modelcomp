# Qwen 3.5 Flash — findings by GPT 5.6 Sol

- Source: Alibaba/Qwen 3.5 Flash (`alibaba/qwen3.5-flash`; OpenRouter snapshot `qwen/qwen3.5-flash-02-23`)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash
- **Short description:** Alibaba's hosted production profile corresponding to the Qwen3.5-35B-A3B model, adding a 1M-token default context and built-in tools for inexpensive multimodal and agentic workloads.
- **Provider / access:** Alibaba Cloud Model Studio and OpenRouter Chat Completions; exact public IDs include `alibaba/qwen3.5-flash` in Vals and `qwen/qwen3.5-flash-02-23` on OpenRouter.
- **Release / knowledge:** Released 2026-02-23; no verified knowledge cutoff was published.
- **IDs:** `alibaba/qwen3.5-flash`; `qwen/qwen3.5-flash-02-23`; no OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens by default and 65,536 max output for the hosted profile ([Vals model record](https://www.vals.ai/models/alibaba_qwen3.5-flash)); Qwen documents 262,144 native and up to 1,010,000 extended tokens for the corresponding 35B-A3B weights ([official model card](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)).
- **Modalities:** Text, image, and video input; text output; reasoning, tool calls, and structured response controls are supported ([Vals](https://www.vals.ai/models/alibaba_qwen3.5-flash), [OpenRouter API record](https://openrouter.ai/qwen/qwen3.5-flash-02-23)).
- **Pricing (as of 2026-10-25):** $0.10 input / $0.40 output per 1M tokens in the Vals Alibaba run; OpenRouter also exposes the dated paid snapshot ([Vals](https://www.vals.ai/models/alibaba_qwen3.5-flash), [OpenRouter](https://openrouter.ai/qwen/qwen3.5-flash-02-23)).
- **Architecture:** Hosted production profile corresponding to Qwen3.5-35B-A3B, a 35B-total / 3B-active sparse MoE with a vision encoder, Gated Delta Networks, 256 routed experts, eight active routed experts plus one shared expert, and Apache-2.0 open weights for the corresponding checkpoint ([official Qwen model card](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **24.72%**, rank **54/67**, Terminus 2 harness ([Vals leaderboard](https://www.vals.ai/benchmarks/terminal-bench-2)).
- SWE-bench Verified: **64.40%**, rank **74/88**, Mini-SWE-agent harness ([Vals leaderboard](https://www.vals.ai/benchmarks/swebench)).
- The corresponding official 35B-A3B weights report BFCL-V4 **67.3%** and TAU2-Bench **81.2%**; these are lineage cross-checks rather than hosted-route measurements ([official Qwen model card](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)).

Reasoning / knowledge:

- GPQA Diamond: **82.83%**, rank **60/138** ([Vals leaderboard](https://www.vals.ai/benchmarks/gpqa)).
- MMLU Pro: **84.06%**, rank **68/138** ([Vals model record](https://www.vals.ai/models/alibaba_qwen3.5-flash)).
- The corresponding official weights report HLE with CoT **22.4%** and GPQA Diamond **84.2%**; the independently measured hosted-route GPQA figure above is used for scoring ([official Qwen model card](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)).

Coding:

- SWE-bench Verified: **64.40%**, rank **74/88**, Mini-SWE-agent harness ([Vals leaderboard](https://www.vals.ai/benchmarks/swebench)).
- LiveCodeBench: **83.28%**, rank **49/143** ([Vals leaderboard](https://www.vals.ai/benchmarks/lcb)).
- Terminal-Bench 2.0: **24.72%**, rank **54/67**, Terminus 2 harness ([Vals leaderboard](https://www.vals.ai/benchmarks/terminal-bench-2)).

Multimodal:

- MMMU Pro: **81.91%**, rank **38/93** ([Vals model record](https://www.vals.ai/models/alibaba_qwen3.5-flash)).

Long context:

- No verified hosted-route long-context retrieval score was found. The exact hosted profile is documented at **1,000,000 tokens**, while the corresponding weights report AA-LCR **58.5%** and LongBench v2 **59.0%** ([Vals](https://www.vals.ai/models/alibaba_qwen3.5-flash), [official Qwen model card](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)); the lineage retrieval figures are not treated as hosted-route measurements.

### Normalized scores (1–100)

- **Tool use: 70/100.** Exact-route SWE-bench reaches 64.40%, but Terminal-Bench 2.0 is only 24.72%; strong corresponding-weight TAU2/BFCL evidence supports a capable but not frontier agent score.
- **Reasoning: 78/100.** Exact-route GPQA Diamond 82.83% and MMLU Pro 84.06% show strong general reasoning, capped by the corresponding model's 22.4% HLE result and lack of a hosted HLE run.
- **Context window: 95/100.** The hosted 1M-token window reaches the methodology's top context tier, but no exact-route MRCR/RULER result justifies a perfect retrieval score.
- **Multimodal: 85/100.** Text, image, and video input plus an 81.91% MMMU Pro result support a high input-multimodal score; output remains text-only.
- **Coding: 74/100.** LiveCodeBench 83.28% and SWE-bench Verified 64.40% are solid, while Terminal-Bench 2.0 at 24.72% caps agentic coding performance.
- **Cost efficiency: 97/100.** Alibaba's $0.10/$0.40 per-million-token rate is near the project's highest paid-value tier, but it is not free.
- **Overall Score: 80/100.** Half-up mean of Tool 70, Reasoning 78, Context 95, Multimodal 85, and Coding 74; best suited to high-volume, long-context multimodal work where low cost matters more than terminal-agent strength.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: independent public internet research across official Qwen documentation, provider records, and exact-route Vals benchmark leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
