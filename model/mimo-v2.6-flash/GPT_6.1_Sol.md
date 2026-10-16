# MiMo V2.6 Flash — findings by GPT 6.1 Sol

- Source: Xiaomi / hosted MiMo-V2.6-Flash and upstream Flash-RL
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** MiMo V2.6 Flash
- **Short description:** Efficiency-balanced MiMo 2.6 multimodal agent model with released RL checkpoint. Hosted Flash measurements and upstream Flash-RL architecture are explicitly distinguished; identical serving weights are not independently verified [S1–S3].
- **Provider / access:** Xiaomi platform, AI Studio, MiMo Code/Desktop, OpenRouter and self-hosting per upstream card. OpenCode lists `mimo-v2.6-flash-free`, Chat Completions route [S1,S5].
- **Release / knowledge:** September 21, 2026 per independent evaluators; cutoff unverified [S2,S3].
- **IDs:** Hosted `mimo-v2.6-flash`; upstream `XiaomiMiMo/MiMo-V2.6-Flash-RL`. Free gateway route is not inferred to be identical to `mimo-v2.6-free` solely from naming [S1,S5].
- **Context window:** Upstream 1M; Vals hosted output 128,000 [S1,S2].
- **Modalities:** Upstream native text/image/video/audio input; text output on AA hosted profile. Vals/AA tested text/image only, so endpoint video/audio availability must be checked [S1–S3].
- **Pricing (as of 2026-10-16):** AA/Vals hosted $0.14 input/$0.28 output per million, AA cache discount 98%; exact native cache/write price not primary-verified. Temporary OpenCode Flash Free is $0 but content may be used to improve models; cost evaluates that disclosed route [S2,S3,S5].
- **Architecture:** Upstream MIT 309B total/15B active MoE, 48 layers, 681M vision encoder, audio encoders and five-layer speculative decoder; not Pro's 1T-class architecture [S1].

### Raw benchmarks found
Agent / tool use:
- Upstream table labelled Flash: TB2.1 **87.6%**, TB4 **28.8%**, AutomationBench v1.0.6 **52.3%**, Toolathlon-Verified **73.6%**, ALE **27.6%**, OSWorld **80.8%**, JobBench **61.2%**, CyberGym **95.1%**, ExploitGym **6.0%** [S1]. GDPval cell blank; Pro Elo not borrowed.
- Vals temp1/top_p0.95/128K default, effort unspecified: TB4 **24.24% ±1.51**, finance v2 **56.28% ±0.46**, legal-agent **11.25% ±2.54**, SRE **4.20% ±1.24**, CyberBench v1.1 **75.36% ±5.42** [S2]. Overrides possible. Tau3/Tau2/Claw/MCP-Atlas not verified.

Reasoning / knowledge:
- AA current v4.3.2 index **38, #11/120 open-weight class**, not global rank [S3]. Vals index **53.23% ±1.10 (#20/49)**, ProofBench **63% ±4.85**, BioMystery **69.26% ±0.98** [S2].
- BenchLM AA-attributed HLE **35.1%**, LCR **74.3%**, CritPt **12%**, Omniscience Index **−12.7**, accuracy/hallucination **27.0%/54.4%** remain secondary-only snapshots. Hallucination denominator is non-correct responses; negative Index is not negative accuracy [S4]. GPQA/MLCR not verified.

Coding:
- Upstream Flash DeepSWE v1.1 **67.9%**, ProgramBench **26.0** with grading details not exposed in README; not equated to hosted complete-pass rate [S1].
- Vals Vibe v1.1 **78.96% ±4.04**, migration **40.93% ±4.35**, ProgramBench **0.50% ±0.50**, terminal-science **4.29% ±2.44**, IOI **47.67% ±4.79** [S2]. BenchLM AA-SciCode **51.3%**, secondary-only [S4]. Exact SWE/LiveCode not verified.

Long context / multimodal:
- Upstream 1M capacity, no MRCR/RULER full-window percentage found [S1]. AA-MMMU Pro **73.1%**, secondary-only [S4]; native omni encoders substantiate input breadth but not equal accuracy across modalities [S1].

### Evidence comparison and research trail
Three fresh Google queries: `MiMo V2.6 Flash official model`, `MiMo V2.6 Flash independent benchmark`, `MiMo V2.6 Flash review pricing limitations`; interstitials. Initial non-RL HF path returned 401, guessed standalone blog 404, platform docs app shell; none treated as readable evidence. BenchLM linked correct RL card, read directly alongside independent Vals/AA. Hosted versus RL checkpoint/grade differences explain why vendor ProgramBench26 cannot substitute for Vals0.50. AA **$0.06/task, 240M suite output tokens, 53.1 tokens/s, 5.06s TTFT** and Vals **$0.202/test /58m02s** use different suites; cheap tokens do not mean short runs. BenchLM **64.5/#38 of954, 24/639 partial coverage** is not repository Overall [S3,S4]. Free gateway/data-use and paid hosted economics retained separately.

### Normalized scores (1–100)
- **Tool use: 84/100.** Useful finance/legal/terminal with broad vendor tools, capped by low SRE and harness uncertainty [S1,S2].
- **Reasoning: 82/100.** Proof/BioMystery and current index support useful reasoning; secondary calibration weakness and limited academic reruns cap ceiling [S2–S4].
- **Context window: 95/100.** Verified 1M, no perfect-retrieval evidence [S1].
- **Multimodal: 95/100.** Upstream native audio/video/image coverage; hosted endpoint limits and text-only output disclosed [S1–S3].
- **Coding: 86/100.** Good Vibe/migration/DeepSWE, capped by ProgramBench grading gap and scientific-terminal failures [S1,S2].
- **Cost efficiency: 100/100.** Explicit temporary OpenCode Flash Free $0; paid $0.14/$0.28 and data-use terms separately documented [S2,S3,S5].
- **Overall Score: 88/100.** (84 + 82 + 95 + 95 + 86) / 5 = 88.4 → 88. Best fit inexpensive supervised multimodal/coding workers after endpoint validation; cost excluded.

### Sources
- [S1] https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL/raw/main/README.md — primary exact upstream architecture/licence/Flash-labelled results.
- [S2] https://www.vals.ai/models/xiaomi_mimo-v2.6-flash — independent hosted suite and settings.
- [S3] https://artificialanalysis.ai/models/mimo-v2-6-flash — independent profile, class rank and costs.
- [S4] https://benchlm.ai/models/mimo-v2-6-flash — secondary sourced metrics, October 16.
- [S5] https://opencode.ai/docs/zen — directly inspected gateway Free route and improvement-data policy.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent web research, three searches, direct upstream/evaluator comparison; hosted/RL, grades, pricing and endpoint modalities separated. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
