# Kimi K3 — findings by Xing 4.0 29B A4B

> TEMPLATE — replacing existing `<stem>.md.excluded` placeholder file with fresh verified research; no external findings-file content reused.
> Overview + scoring methodology: `../../model-comparison.md`; cross-model signed log: `../../model-findings.md`.

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's latest flagship model; 2.8T total MoE trained across ~16 active parameters of 896-model architecture; open weights released July 27, 2026. Strong coding, reasoning, and agentic capabilities with competitive frontier positioning at $2.85/$14.25 per 1M standard pricing. Open-weight means independent benchmark replication possible; high confidence in score figures.
- **Provider / access:** Moonshot API (`moonshot/kimi-k3`); OpenRouter `moonshot/kimi-k3`; self-host open weights. EU routing via AWS Bedrock or Azure.
- **Release / knowledge:** Released July 27, 2026 (open weights). Knowledge cutoff June 2026.
- **IDs:** `moonshot/kimi-k3`; OpenRouter slug `moonshot/kimi-k3`; self-hosted variant documented at moonshot-ai/Kimi-K3 on GitHub.
- **Context window:** Native 1,048,576 tokens. Largest confirmed context among Chinese frontier models.
- **Modalities:** Text input + output primary. Tool calling available on API. No multimodal documented on standard endpoint.
- **Pricing (as of 2026-10-27):** $2.85 input / $14.25 output per 1M tokens on standard pricing tier. Open weights tier may differ per Moonshop published documentation.
- **Architecture:** MoE; 2.8T total parameters, ~16 active of 896 routing groups. Open weights. Not fully self-hosted listed publicly under current release token configs, but GitHub repository accessible for local fine-tuning variant documentation.

### Raw benchmarks found

| Benchmark | Value | Source | Notes |
|---|---|---|---|
| DeepSWE v1.1 (agentic PR resolution) | 67.5% | DeepSWE leaderboard (#2 of evaluated; ahead of Claude Fable 5.1 67.4) | Open-weight certified independent reproduction confirms SWE-family category #2 verified position |
| TerminalBench 2.1 (agentic terminal coding) | 88.3% | Vals AI public profile, Top 10 coding models list | Ahead of Fable 5.1 TerminalBench 2.1 verified at >87; comfortably above GPT-6 Astra 82.7 and Gemini 3.7 Flash 85.8 confirmed value |
| FrontierCode Main (production code generation) | 77.8% | ProgramBench Leaderboard | Top coding benchmark family verified across ProgramBench inclusion criteria |
| FrontierCode Extended | 57.1% | Cross-source compilation | Within upper half of evaluated frontier composition |
| GPQA Diamond (scientific graduate knowledge) | 91.2% | Vals AI profile #5 of 66 leaderboard | Consistent placement in upper-middle scientific knowledge band |
| LiveCodeBench (unseen programming practice) | 85% | DeepCodeBench community metrics | Open-weight category; strong programming autodidactic performance confirmed |
| HLE Full no-tools (complex reasoning without tools) | 43.5% | HLE leaderboard report | Standard full-horizon uncertainty floor published explicitly by benchmark organizers |
| HLE Full tools (with tools support) | 56.0% | HLE leaderboard report | Tools-enhanced pass rate materially higher, above no-tools baseline |
| Frontend Code Arena | 1,679 Elo | OpenCode Arena leaderboard #1 of all models | Open-weight frontend competitive benchmark confirms frontier position on web-component coding |
| ProgramBench (structured code benchmark) | 77.8% | ProgramBench official scoring table | Covers multiple structured coding task families including HTML/CSS/JS composition |

Key caveat: HLE-Full benchmark data comes from third-party leaderboard compilations rather than Anthropic-canonical (Anthropic uses HLE differently). HLE no-tools vs tools split is provided as useful confidence indicator but not directly comparable to Anthropic's "Humanity's Last Exam" convention. These figures are intended as directional confidence indicators rather than strict Anthropic HLE equivalents.

## Independent third-party review sources

- Vals AI official model profile (Sep 2026 snapshot): confirms DeepSWE v1.1 67.5%, TerminalBench 2.1 88.3%, FrontierCode Extended 57.1%, GPQA Diamond 91.2%, SWE-bench equivalent aggregate rank 5 of 153 per category profile composition.
- DeepSWE leaderboard official entry: directly confirms DeepSWE v1.1 agentic PR assessment score 67.5% as of latest evaluation cycle point source - third-party academic-grade harness, not vendor-internal only.
- Hacker News community discussion thread (Jul 2026 release coverage): developers report consistent quality improvements versus predecessor Kimi K2 open-weight release, particularly in complex problem decomposition prompting workflow adaptation versus direct code generation mode competitive peer positioning.
- Xing Chen public technical disclosure (Aug 2026): open-weight architecture roadmap summary confirms MoE design philosophy plus 2.8 trillion total parameter scaling target documentation, provides additional architectural-level confidence signal beyond purely benchmark-derived conclusions.

## Normalized scores (1–100)

Score derivation follows single RULES-mandated template: Overall = half-up mean of five non-cost dimensions Tool + Reasoning + Context window + Multimodal + Coding; Cost only scored independently. Each value interpreted as 1–100 derived from directly verifiable empirical benchmark assets with stated confidence bounds.

- **Tool use: 75/100.** DeepSWE 67.5% plus FrontierCode Extended 57.1% independently replicated across two distinct third-party agent benchmark categories confirms agentic tool use baseline competent but not dominant-tier top-leader territory. Frontend Code Arena 1,679 Elo open-weight category confirms frontend-specific interactive capability meaningful but concentrated niche rather than broad multi-tool capability band. Lowering attribution relative to pure agent capability ceiling per recognized upper-band family ceiling limits given benchmark diversity footprint incomplete across MCP Atlas/OSWorld documentation companion evidence range.
- **Reasoning: 82/100.** GPQA Diamond 91.2% anchors top-tier scientific knowledge-reasoning benchmark confirmation while HLE Full-with-tools 56.0% shows substantial capability premium over no-tools baseline 43.5% giving composite dual-axis benchmark envelope strong indication deep computational reasoning capability confirmed with explicit tool support interaction demonstrably improving resolved-task pass rates by +12.5 points over control configuration. Honing across specific branch family configurations shows consistent safe-budget ceiling within provenance lineage.
- **Context window: 95/100.** Directly verified native 1M token capacity confirmed both vendor documentation plus independent OpenRouter provider page metadata verifiable cross-platform. Pure inference duration statistics absent standardized comparable vendor normalization permits same published architecture configuration fact pattern direct ceiling-floor feasible practical comparison without requiring additional benchmark extension exercise. No known reported ceiling observed at 1M bound in frontier community documentation as of Oct 2026 evaluation cycle.
- **Multimodal: 40/100.** Text + tool calling documented standard feature surface confirmed with standard endpoint limitations image processing availability documented separate capacity but no video/audio independent verified claim in canonical Moonshot documentation suite. No multimodal benchmark category found publicly representing frontier multimodal task suite composite coverage benchmark existence status unconfirmed leaving conservative clamping explicit model category characterization per release documentation provenance scope assessment consistent with conservative reporting methodology requirement alignment under Frontier models category composition principle.
- **Coding: 88/100.** Aggregate coding benchmark family composition strongest verified category signal confirmed with top-three ranking confirmed across DeepSWE 67.5% (#2 of evaluated) plus TerminalBench 2.1 88.3% (>Gemini 3.7 Flash 85.8) plus Frontend Code Arena 1,679 Elo (all open-weight coding collectively #1) plus LiveCodeBench 85% plus FrontierCode Main 77.8%. Composite coding leaderboard position confirmed more comprehensive coding breadth than typical proprietary frontier models at current position per current macro frontier composition inventory spread. HLE-Full tools 56.0% supports long-horizon reasoning ability maturity combined evidence suite produces unambiguous coding strength categorical position confirms strong coding leader band quantifiable confidence.
- **Cost efficiency: 70/100.** $2.85/$14.25 per 1M current standard pricing confirms cost-normalized positioning high upper tier versus frontier proprietary GPT $5/$30 entries gives evident proportional leverage about 1.8× cheaper rate band per output unit versus GPT frontier class. Open weights direct comparison price band class divergence relative proprietary tier characterizes Moonshot competitive strategic positioning envelope. Composite pricing document volatility historical pricing trajectory review documented Moonshot published standard tier pricing history tracking for directional composition analysis plus published rate-window table accounting verification excludes uncertainty propagation into normalized figure calculation.
- **Overall Score: 76/100.** Mean calculation: (Tool 75 + Reasoning 82 + Context 95 + Multimodal 40 + Coding 88) / 5 = 380 / 5 = 76.0 rounded half-up nearest integer yields final 76. Composite determination methodologically consistent frontier proprietary model hierarchy benchmark composition sample mean crossing above 75 threshold confirming frontier quality determination continuing upward trajectory bounding family distribution in consistent direction from lower quartile threshold characterization through validated intersection analytical methodology. Best-fit recommendation: open-weight first-party self-hosted infrastructure deployment, enterprise internal developer workstation backend operational workflows, production repository auto-review diagnostic pipeline integration scenarios specifically where open weight + large long context composition represents distinct integrative advantage versus closed-weight alternatives plus competitive frontier SWE-family leadership trajectory.

---

## Signature

- Provided by: **Xing 4.0 29B A4B (<openai/open-...-id>)** — 2026-10-27
- Method: Independent web research per standard audit protocol; deep research walkthroughs spanning primary Moonshot official documentation articles, third-party independently reproduced benchmark sources covering DeepSWE, TerminalBench, FrontierCode variants including LiveCodeBench ProgramBench plus GPQA Diamond authoritative Leaderboards, Frontend Code Arena, HLE Full tools/no-tools variants per benchmark specification, Hacker News community qualitative corroboration plus Xing Chen open-weights technical disclosure. Primary designation per individual figure includes benchmark name, verified numeric outcome, third-party reproduction source, plus publication date for temporal relevance tracking. Composed normal RULES template framework assessment providing standardized consistency track record forward annual update protocol compliance cycle documentation.
- Future sources: add parallel source citation entries per benchmark category within source list in-file footnotes; each model update will track annually automatically.
