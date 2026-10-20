# Claude Sonnet 4.5 — findings by GPT 6.1 Sol

- Source: Anthropic / `claude-sonnet-4-5-20250929`; Thinking and Non-reasoning evidence separated.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Claude Sonnet 4.5.
- **Short description:** Anthropic's September 2025 coding/agent model, now deprecated but functional. This report assesses the pinned 4.5 checkpoint and current primary documented limits, not later Sonnet models or a parallel-candidate agent configuration.[1][2]
- **Provider / access:** Native Claude **Messages API**, pin `claude-sonnet-4-5-20250929`, alias `claude-sonnet-4-5`; Bedrock `anthropic.claude-sonnet-4-5-20250929-v1:0`, Google `claude-sonnet-4-5@20250929`. Exact gateway `anthropic/claude-sonnet-4.5`, backend `anthropic/claude-4.5-sonnet-20250929`. No verified free Zen ID.[2][5]
- **Release / lifecycle:** Released **2025-09-29**, deprecated **2026-09-30**, **retires November 30, 2026** according to current primary reference. This is an actual stated retirement date, not merely a minimum-support commitment. Reliable cutoff **January 2025**, training-data cutoff **July 2025**; AA's July field is not the reliable-knowledge date.[2][3]
- **Context window:** Current primary model reference and context guide both say **200,000 total / 64,000 output**. Historical launch/Vals beta `context-1m-2025-08-07`, AA metadata and several current gateway advertisements say **1M**; Azure gateway lists 200K. The records conflict. This report conservatively scores **current documented 200K**, and does not present an untested gateway advertisement or historical beta as guaranteed present-day million-token access. Thinking, media and tool results share the window.[1][2][3][4][5][6]
- **Modalities / tools:** Native text/image → text, with platform PDF/file handling; no native audio/video or non-text generation. Extended thinking uses a manual budget; **effort parameter not supported**. Interleaved thinking requires its beta header. Computer use, code execution, memory/context tools and structured output are service/integration features rather than native modalities.[1][2][6]
- **Pricing (2026-10-20):** Native **$3 input/$15 output/$0.30 cache read/$3.75 five-minute write/$6 one-hour write per 1M**; Batch input/output 50% discount. Gateway-advertised long-context routes charge **$6/$22.50/$0.60 read/$7.50 five-minute write/$12 one-hour write above 200K prompt tokens**. Those route tariffs do not resolve native context availability. Regional provider surcharges and hosted tools add cost.[2][5]
- **Architecture:** Proprietary, no verified public parameter count, active count or open weights. Memory/compaction does not create unlimited native context.[2][6]

### Raw benchmarks found

**Identity:** AA bare `claude-4-5-sonnet` is **Non-reasoning**, UUID `91cb6144-4937-4e4e-aeda-b4341d355c10`, estimated index. Reasoning record **`claude-4-5-sonnet-thinking`**, UUID `90e078f2-051b-4c63-8919-76618971cb3f`, has a measured current index. Vals exact dated Thinking profile uses Anthropic, temperature 1 and 64,000 output; no unsupported effort setting is inferred.[3][4][8]

Agent / tool use:

- **TB2.1 55.81% AA Reasoning**, versus **TB2.0 41.57% ± 5.25 Vals Thinking**; different suites/harnesses. Current **TB4 0.0% AA is measured**, not null. Terminal-science field is null.[3][4]
- **Tau2 78.07% / Tau3-Banking 24.54% AA Reasoning**. Publisher Tau2 setup includes targeted airline/telecom policy and user-prompt addenda; scores under those changes should not be assumed vanilla reproduction.[1][3]
- **GDPval 910.05 Elo / Briefcase 713.27 Elo**, rubric pass **14.65%**, **AutomationBench 14.08% partial / IFBench 57.28% AA** show limited current hard-workflow reliability.[3]
- **OSWorld 61.4% vendor**, official OSWorld-Verified framework, 100 maximum steps averaged over four runs. Publisher's “30+ hours” focus claim is an observation/testimonial, not a standardized agent success rate. No exact Claw-Eval/ClawProBench/MCP-Atlas/Toolathlon/SWE Atlas QnA found.[1]

Reasoning / knowledge:

- **GPQA Diamond 83.43% AA / 81.63% ± 2.25 Vals**, **HLE 17.79% / AIME 2025 88.0% / CritPt 1.14% AA Reasoning**.[3][4]
- **MMLU Pro 87.36% / LegalBench 84.08% / SAGE 36.06% Vals**. No newer Claude scientific scores inherited.[4]
- **AA Intelligence Index 20.666 measured current**, not launch-era index scale or this report's Overall. Vals displayed **64.70% aggregate** and its launch then-SOTA claims are different suite/date contexts.[3][4]
- **Omniscience 32.87% accuracy / 49.08% hallucination / reliability −0.0833 AA**. Non-reasoning comparison: **GPQA 72.73% / HLE 7.23% / AIME 37.0% / CritPt 0.0% measured**, with estimated index **19.344**. Mode selection materially affects quality.[3][8]

Coding / context / vision:

- **SWE Verified 77.2% vendor**, full 500, ten-trial average, simple bash/string-edit scaffold, 200K thinking evaluation budget and a prompt encouraging extensive tool use/tests. **82.0% is parallel attempts plus filtering and scoring-model selection**, not ordinary pass@1. Historical 1M configuration reached 78.2%, but publisher chose 200K as its primary result because of inference issues.[1]
- **SWE Verified 70.00% ± 2.05 / LiveCodeBench 73.00% ± 1.13 / Vibe Code v1.1 22.62% Vals**; AA **LiveCodeBench 71.43% / SciCode 45.72%**. Repair/short-exercise strengths do not establish high extended app success. No exact independently verified SWE-Pro/DeepSWE found.[3][4]
- **LCR 72.33% AA Reasoning / 54.0% Non-reasoning**; no near-perfect maximum-window MRCR/RULER verified. Historical beta capacity is separately recorded rather than used to inflate this context score.[3][8]
- **MMMU-Pro 68.73% AA / 79.31% ± 0.97 Vals**, **GDP.pdf 5.2% all-pass AA**. Suite/variant preprocessing differs; do not average these into one visual accuracy.[3][4]
- Simon Willison's disclosed preview review links a real repository/tree-conversation implementation experiment and transcript. Reported passing tests are single-workflow evidence, not a universal production-ready guarantee. It supports practical bounded engineering while revealing how much agent tooling contributes.[7]
- AA Reasoning median **52.91 output tokens/s / 16.24 s first chunk**, weighted **$0.5566/task**, **65.14M output/48.59M reasoning evaluation tokens**. Non-reasoning starts around **1.01 s**; speed is mode-specific.[3][8]

### Normalized scores (1–100)

- **Tool use: 70/100.** Useful older terminal/customer-service and GUI evidence, capped by measured TB4 zero and low current full-deliverable/automation performance.[1][3][4]
- **Reasoning: 74/100.** Independently measured GPQA/AIME and MMLU support capable bounded reasoning, capped by HLE 17.79%, CritPt 1.14% and weak factual calibration.[3][4]
- **Context window: 70/100.** Current primary 200K meets the methodology's 200K anchor; historical beta/current advertised 1M conflict is not resolved by authenticated inference.[2][5][6]
- **Multimodal: 78/100.** Native image/PDF understanding with measured visual evidence, capped by poor hard document completion and no native audio/video/non-text output.[2][3][4]
- **Coding: 78/100.** Full-500 vendor and independent repair/exercise results plus concrete practical work support useful coding, capped by harness-sensitive headline and Vibe 22.62%.[1][3][4][7]
- **Cost efficiency: 68/100.** Caching/batching help, but $3/$15 standard, possible long-context premiums and costly hard-task failures are expensive against current alternatives.[2][3][5]
- **Overall Score: 74/100.** Half-up mean `(70 + 74 + 70 + 78 + 78) / 5 = 74`; cost excluded. Useful for existing pinned coding/document workflows, with November retirement and current context conflict explicit.

### Research trail and sources

Fresh Bing RSS `"Claude Sonnet 4.5" official benchmark` returned broad Claude links; Google `"Claude Sonnet 4.5" independent benchmark review` a JavaScript interstitial; DuckDuckGo `"Claude Sonnet 4.5" Artificial Analysis context pricing` provided primary/spec/evaluator leads. Publisher launch methodology, current reference/context guide, separate exact AA modes, Vals, live provider metadata and disclosed independent practical review were compared. No unviewed launch-table image values or peer findings were used.

[1]: https://www.anthropic.com/news/claude-sonnet-4-5 "Primary launch, full-500 versus parallel-compute SWE, Tau2 prompt caveats and OSWorld"
[2]: https://platform.claude.com/docs/en/models/sonnet-4-5/overview "Current primary lifecycle, pin, 200K/64K, cutoff taxonomy, prices and absent effort support"
[3]: https://artificialanalysis.ai/models/claude-4-5-sonnet-thinking "Exact selected Reasoning public record, current measured metrics/cost/runtime"
[4]: https://www.vals.ai/models/anthropic_claude-sonnet-4-5-20250929-thinking "Independent exact Thinking profile and historical million-context beta note"
[5]: https://openrouter.ai/api/v1/models/anthropic/claude-sonnet-4.5/endpoints "Current provider advertisements, 200K versus 1M routes and long-prompt tariffs"
[6]: https://platform.claude.com/docs/en/build-with-claude/context-windows "Current primary 200K classification, thinking accounting and beta tool behavior"
[7]: https://simonwillison.net/2025/Sep/29/claude-sonnet-4-5/ "Disclosed hands-on repository experiment and linked transcript/artifacts"
[8]: https://artificialanalysis.ai/models/claude-4-5-sonnet "Separate Non-reasoning selected record, not Thinking benchmark evidence"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, primary launch/current reference checks, exact independent mode-specific evaluator records, provider comparison and practical third-party evidence. Scores are editorial normalized 1–100 interpretations, not vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
