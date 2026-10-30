# GLM-5.3 — findings by GPT-6 Luna

- Source: Z.AI/GLM-5.3
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Z.AI's open-weight, reasoning-enabled flagship for complex software engineering, long-horizon agents, and cyber-security research. Z.AI says it uses the same base model as GLM-5.2, with the improvements coming from post-training.
- **Provider / access:** Z.AI API model `glm-5.3`; official docs list OpenAI Chat Completions-compatible, OpenAI Responses-compatible, and Anthropic Messages-compatible protocols. Existing or expired GLM Coding Plan subscribers are currently limited to the Chat Completions-compatible protocol. Downloadable weights are published as `zai-org/GLM-5.3`; third-party routes include OpenRouter `z-ai/glm-5.3`.
- **Release / knowledge:** Vals AI lists release date **2026-08-18**. No verified knowledge-cutoff date found.
- **IDs:** Z.AI API ID `glm-5.3`; Hugging Face repo `zai-org/GLM-5.3`; OpenRouter route `z-ai/glm-5.3`. The tracked `opencode/glm-5.3` is a catalog wrapper, not a Z.AI API ID.
- **Context window:** **1,000,000 tokens**; maximum output **128,000 tokens**, per Z.AI model documentation.
- **Modalities:** Text input and text output only; no image, video, file, or audio input listed. Reasoning is always enabled, with `low`, `high`, and `max` effort (default `max`). Function calling and structured output are supported.
- **Pricing (as of 2026-10-30):** Z.AI API **$1.40 input / $4.40 output per MTok**, cached input **$0.26/MTok**; cached-input storage is listed as limited-time free. Z.AI also offers a points-based Coding Plan; pricing depends on the plan rather than a single token rate. Built-in web search is separately priced at $0.01/use.
- **Architecture / weights:** **753B total / 40B active parameters**, a sparse MoE, per the Hugging Face model card and Artificial Analysis. Open weights under the custom **GLM-5.3 License**, not MIT or Apache-2.0. The license broadly permits use and redistribution but requires Z.AI security review before commercial use of a Model-as-a-Service product if the licensee and affiliates exceed $10B revenue in any consecutive 12 months.
- **Evaluation caveat:** GLM-5.3's Terminal-Bench scores vary materially by benchmark version and harness. Z.AI reports its own Terminal-Bench 2.1 run under Claude Code, Vals AI reports a separate Terminus 2 run, and Vals' Terminal-Bench 4.0 uses a new task set and mini-swe-agent. Do not merge or compare these as one score.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (Z.AI model card; Claude Code 2.1.207 harness, temperature 1, top-p 1, 65,536 max new tokens, six-hour timeout).
- Terminal-Bench 2.1: **71.54%**, rank **26/76**, on Vals AI's archived leaderboard updated **2026-10-01** (Terminus 2; $0.31/test, 548.46K tokens/test, 13m07s). This is an independent harness result, distinct from Z.AI's 88.2% report.
- Terminal-Bench 4.0: **38.89% ± 1.82**, rank **15/58**, on Vals AI (mini-swe-agent, avg@3; **2026-10-29**). Vals says its 66 tasks are all new, none overlap with Terminal-Bench 2.1, and the scores are not comparable across versions.
- GDPval-AA v2: **1,769 Elo** (Z.AI model card); τ3-Banking: **50.3%** (Artificial Analysis); Toolathlon Verified: **73.0%** (Z.AI, pass@1 averaged over three runs); AutomationBench v1.0.6: **48.2%** (Z.AI); Agents' Last Exam CLI: **28.5%** (Z.AI).
- CyberGym: **84.5%**; ExploitBench: **54.4%**; ExploitGym: **105 tasks in two hours / 130 in six hours** (Z.AI model card). These are specialized cybersecurity evaluations, not general tool-use scores. Z.AI describes its CyberGym run as single-run pass@1 over 1,507 tasks in Claude Code, with no web tools.
- Artificial Analysis reports AutomationBench-AA **62.2%** and GDPval-AA **57.5%** (normalized) on a different evaluation listing from Z.AI's AutomationBench v1.0.6 and GDPval-AA v2. Keep versions and metrics separate.
- No verified Claw-Eval or ClawProBench score found.

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (Artificial Analysis); HLE-Diamond: **42.3%** and LCR: **79.7%** (Artificial Analysis).
- HLE with tools: **62.5%** (Z.AI model card; temperature 1, top-p 0.95, 300K context-management limit, up to 163,840 generated tokens; GPT-5.6 Luna medium used as judge). This is not directly comparable to the AA HLE-Diamond result.
- GPQA Diamond: **88.13% ± 1.85** and MMLU-Pro: **86.77% ± 0.34** (Vals AI, GLM-5.3 page; its default provider is Fireworks AI, max reasoning effort, temperature 1, top-p 0.95).
- Artificial Analysis Intelligence Index: **32** (AA model page). BenchLM's 2026-10-29 rollup lists **31.6**; retain the AA page's current figure and note the rollup difference as a snapshot/version discrepancy.
- CritPt: **19.1%** and MLCR-AA: **17.2%** (Artificial Analysis).

Coding:

- Terminal-Bench 3.0: **28.3%**; DeepSWE v1.1: **66.9%**; NL2Repo: **58.0%**; ProgramBench (Almost Solved): **19.0%**; FrontierSWE: **78.1%**; SWE-Marathon v1.1: **42.5%**; PostTrainBench: **39.8%** (Z.AI model card). DeepSWE used mini-swe-agent with a six-hour timeout and 400K context; FrontierSWE reports a dominance score, not a pass rate.
- SWE-bench: **95.40% ± 0.94**, rank **6/88**; LiveCodeBench: **80.53% ± 1.06**; Vibe Code Bench v1.1: **78.13% ± 3.94**, rank **34/122**; Terminal-Bench 4.0: **38.89% ± 1.82** (Vals AI, default provider Fireworks AI, max reasoning effort). Vals labels the score “SWE-bench” without a Verified/Pro suffix, so the unsuffixed label is preserved here.
- SciCode: **59.0%**; Coding Index: **74.8%** (Artificial Analysis).
- Z.AI's private Code Bench reports **34.5%** at max effort using about **75K output tokens/task**, versus GLM-5.2's **23.4%** at about 96K. This is a vendor-run private benchmark, not a public leaderboard result.

Long context / multimodal:

- Z.AI specifies a **1M-token** context, but no verified MRCR or other retrieval-accuracy result at 512K+ was found. AA LCR is **79.7%**, but the cited page does not establish that this is a 1M-context needle-retrieval test.
- Text-only input/output. No visual, audio, or video understanding score applies.

### Normalized scores (1–100)

- **Tool use: 93/100.** Z.AI reports Terminal-Bench 2.1 at 88.2% and GDPval-AA v2 at 1,769 Elo, while AA τ3-Banking is 50.3%; the separate Vals Terminal-Bench 2.1 result is lower at 71.54%, and no Claw-Eval result is available.
- **Reasoning: 92/100.** AA GPQA Diamond is 91.7%, HLE-Diamond 42.3%, and LCR 79.7%; Z.AI's HLE-with-tools result is 62.5%, but the AA Intelligence Index is 32 rather than the methodology's 60+ frontier reference.
- **Context window: 90/100.** The 1M window is in the 500K–1M tier; no retrieval-accuracy result at 512K+ supports 100.
- **Multimodal: 15/100.** The API/model card specify text-only input and output.
- **Coding: 92/100.** Public evidence includes Z.AI Terminal-Bench 2.1 at 88.2%, Vals SWE-bench at 95.40%, AA SciCode at 59.0%, and Coding Index at 74.8%; DeepSWE is 66.9%, while Vals reports 38.89% on the non-comparable Terminal-Bench 4.0 set.
- **Cost efficiency: 86/100.** The $1.40/$4.40 per-MTok pricing is high relative to smaller open models, and AA reports $5.01 per Intelligence Index task; cached input is $0.26/MTok and measured coding performance is strong.
- **Overall Score: 76/100.** Half-up mean of the five quality dimensions: `(93 + 92 + 90 + 15 + 92) / 5 = 76.4`, rounded to **76**. A strong text-only choice for software engineering and terminal agents, but not for multimodal work; confirm whether the custom license's high-revenue MaaS review condition applies before commercial hosting.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Independent research across Z.AI's model documentation and hosted model card, the full GLM-5.3 license, Artificial Analysis, Vals AI's exact model page and archived/versioned leaderboards, BenchLM's sourced rollup, and OpenRouter's endpoint listing. Official, third-party, private, and cybersecurity-only evaluations are distinguished; Terminal-Bench versions and harnesses are not conflated. Scores are normalized interpretations, not official ratings.
- Sources: [Z.AI GLM-5.3 model guide](https://docs.z.ai/guides/llm/glm-5.3); [Z.AI API pricing](https://docs.z.ai/guides/overview/pricing); [Z.AI GLM-5.3 Hugging Face model card and benchmark table](https://huggingface.co/zai-org/GLM-5.3); [GLM-5.3 license](https://huggingface.co/zai-org/GLM-5.3/raw/main/LICENSE); [Artificial Analysis GLM-5.3 (max)](https://artificialanalysis.ai/models/glm-5-3); [Vals AI GLM-5.3 exact-model results](https://www.vals.ai/models/zai_glm-5.3); [Vals AI Terminal-Bench 2.1 archived leaderboard](https://www.vals.ai/benchmarks/terminal-bench-2-1); [Vals AI Terminal-Bench 4.0 leaderboard and methodology](https://www.vals.ai/benchmarks/terminal-bench-4); [BenchLM sourced benchmark rollup](https://benchlm.ai/models/glm-5-3); [OpenRouter GLM-5.3 route](https://openrouter.ai/z-ai/glm-5.3).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
