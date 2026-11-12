# GLM 4.5 Flash — findings by MiniMax M3.1 Flash

- Source: Z.ai (Zhipu AI / BigModel platform, model code `glm-4.5-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.5-Flash
- **Short description:** Z.ai's free, fast tier of the GLM-4.5 generation — a text-only model with hybrid reasoning, tool calling and MCP support, marketed for reasoning, coding and agent use. It is the lightest paid-tier sibling of GLM-4.5 (355B) and GLM-4.5-Air (106B), and it is scheduled to be taken offline on 2026-01-30 after which requests are automatically routed to GLM-4.7-Flash.
- **Provider / access:** Z.ai / BigModel developer platform (model code `glm-4.5-flash`, Chat Completions with a `thinking.type` parameter), plus the Chinese-language BigModel open platform. No public weights repository was found for this checkpoint. Not listed in the OpenCode Zen catalog checked on 2026-11-12, and no OpenRouter entry was found.
- **Release / knowledge:** GLM-4.5 generation released 2025-07; GLM-4.5-Flash published as part of that generation. Scheduled deprecation 2026-01-30. Knowledge cutoff not publicly stated by Z.ai.
- **IDs:** `glm-4.5-flash` (Z.ai / BigModel API model code), `opencode/glm-4.5-flash` (comparison catalog id).
- **Context window:** 128K total with up to 96K maximum output tokens, as documented on the Z.ai model pages ("上下文窗口 128K", "最大输出 Tokens 96K"). No long-context retrieval measurement was published for this checkpoint.
- **Modalities:** Text in, text out; reasoning via hybrid modes (thinking.type `enabled` / `disabled`, dynamic thinking on by default); function calling, MCP tool invocation, structured output, context caching, streaming.
- **Pricing (as of 2026-11-12):** Free on both the Z.ai international platform and the Chinese BigModel platform (Free / Free / Free across input, output and cached-read columns). The free tier ends with the model's retirement on 2026-01-30.
- **Architecture:** Proprietary hosted checkpoint; no parameter count is published for GLM-4.5-Flash. The family reference points are GLM-4.5 (355B total, 32B active) and GLM-4.5-Air (106B total, 12B active), both Mixture-of-Experts.

### Raw benchmarks found

#### Agent / tool use

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| Terminal-Bench 2.1 / Tau3-Bench / GDPval-AA / Claw-Eval / MCP-Atlas | no verified public score found for GLM-4.5-Flash | — | No model-specific agentic score was published |
| GLM-4.5 family agentic average (TAU-Bench, BFCL V3 full, BrowseComp) | 58.1 for GLM-4.5; 55.2 for GLM-4.5-Air | Z.ai benchmark chart (`benchmark-1.png`) | Provisional proxy for the Flash member; Flash is absent from the chart |
| Tool-calling capability | function calling, MCP tool invocation, web browsing, Claude Code / Roo Code integration | Z.ai model documentation | Capability evidence only, no measured score |
| Real-world agent coding eval (52 tasks) | GLM-4.5 competitive with Claude 4 Sonnet, stronger than other open-source models on tool-invocation reliability | Z.ai GLM-4.5 announcement page | Vendor-run evaluation of GLM-4.5, not of Flash |

#### Reasoning / knowledge

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| GPQA Diamond / HLE / AIME 24 / MATH 500 / MMLU-Pro / SciCode for GLM-4.5-Flash | no verified public score found | — | No model-specific reasoning score was published |
| GLM-4.5 family reasoning average (MMLU-Pro, AIME 24, MATH 500, SciCode, GPQA, HLE, LCB 2407-2501) | 68.8 for GLM-4.5; 66.1 for GLM-4.5-Air | Z.ai benchmark chart (`benchmark-1.png`) | Provisional proxy; Flash is absent from the chart |
| Artificial Analysis Intelligence Index / BenchLM overall | no profile published | Artificial Analysis, BenchLM | Neither site carries a GLM-4.5-Flash entry |

#### Coding

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| SWE-bench Verified / Terminal-Bench / LiveCodeBench for GLM-4.5-Flash | no verified public score found | — | No model-specific coding score was published |
| GLM-4.5 family coding average (SWE-Bench Verified, Terminal-Bench) | 50.9 for GLM-4.5; 41.5 for GLM-4.5-Air | Z.ai benchmark chart (`benchmark-1.png`) | Provisional proxy; Flash is absent from the chart |
| GLM-4.5 12-benchmark aggregate | 63.2 (GLM-4.5), 59.8 (GLM-4.5-Air) | Z.ai benchmark chart (`benchmark-0.png`) | Provisional proxy for the family |

#### Multimodal

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| Image / audio / video input | not supported — text in, text out | Z.ai model documentation | No multimodal score exists |

#### Long context

- No long-context retrieval measurement (MRCR, RULER, GraphWalks) at 128K was published for GLM-4.5-Flash; the 128K / 96K figures are documented specifications.

#### Availability and caveats

| Item | Detail | Source | Notes |
|------|--------|--------|-------|
| Retirement date | 2026-01-30, after which requests are routed to GLM-4.7-Flash | Z.ai / BigModel documentation | The free tier and this model id both end on that date |
| Free tier | completely free to use, no per-token charge | Z.ai model documentation | Ends with the retirement above |
| Weights | no public weights repository for this checkpoint | — | Self-hosting the exact checkpoint is not possible |
| Platform listing | absent from the OpenCode Zen model list checked on 2026-11-12 | OpenCode Zen docs | Only GLM-5.3-Flash Free is offered as a free GLM id there |

### Conflicting evidence (vendor vs independent) and how it was resolved

- **Vendor ranking claim versus vendor chart.** Z.ai's English GLM-4.5 page states that on the aggregated average of its 12 selected benchmark suites "GLM-4.5 ranks second globally among all models, first among domestic models, and first among open-source models". The accompanying chart (`benchmark-0.png`) actually shows GLM-4.5 third overall at 63.2, behind o3 at 65.0 and Grok 4 at 63.6. Resolved by using the chart values (the auditable numbers) and recording the prose claim as a vendor-internal inconsistency.
- **No model-specific benchmarks.** Every measured number available for this generation belongs to GLM-4.5 or GLM-4.5-Air; GLM-4.5-Flash appears in no benchmark table, leaderboard or benchmark profile (no Artificial Analysis page, no BenchLM page, no OpenRouter listing). Resolved by marking all Flash rows "no verified public score found", scoring against the labelled family proxy and discounting it, and stating the evidence gap in every dimension rather than inventing a Flash-specific figure.
- **Maximum output tokens.** This repository's model card mentions up to 98K maximum output; Z.ai's own documentation says 96K. Resolved in favour of the vendor figure (96K), which is used only as a context caveat and does not change the score.
- **Future identity.** Z.ai's Chinese documentation warns that GLM-4.5-Flash will be taken offline on 2026-01-30 and that requests will then be routed automatically to GLM-4.7-Flash. This is treated as an access and identity caveat, not as evidence about the Flash checkpoint's own quality.

### Notes on identity

- `glm-4.5-flash` is the free, fast member of the GLM-4.5 generation on the Z.ai / BigModel platforms, distinct from the flagship GLM-4.5 (`glm-4.5`), GLM-4.5-Air (`glm-4.5-air`) and GLM-4.5-X (`glm-4.5-x`). It is not the GLM-4.7 generation, which is scored separately in `../glm-4.7-flash/MiniMax_M3.1_Flash.md`.
- After the announced 2026-01-30 retirement, calls addressed to `glm-4.5-flash` are automatically served by GLM-4.7-Flash, so any measurement taken after that date describes GLM-4.7-Flash rather than the checkpoint scored here.
- No public weights repository exists for GLM-4.5-Flash (unlike GLM-4.7-Flash, which ships MIT-licensed weights), so it cannot be self-hosted as this exact checkpoint.

### Normalized scores (1–100)

- **Tool use: 45/100.** Scored conservatively from the family proxy: GLM-4.5's agentic average of 58.1 (TAU-Bench, BFCL V3 full, BrowseComp) and GLM-4.5-Air's 55.2 are discounted because GLM-4.5-Flash is the smallest member and has no measured agentic row, while documented function calling, MCP and web-browsing support plus Claude Code / Roo Code integration justify staying in the mid band rather than at the floor.
- **Reasoning: 55/100.** Provisional from the family reasoning average (68.8 for GLM-4.5, 66.1 for GLM-4.5-Air across MMLU-Pro, AIME 24, MATH 500, SciCode, GPQA, HLE and LiveCodeBench) less a discount for the absence of any Flash-specific measurement and the absence of an independent index, landing at the bottom of the mid band that GPQA 60–80% with HLE under 10% defines.
- **Context window: 58/100.** The documented 128K window falls in the 100K–200K tier (50–64); the 96K maximum output is a positive but unmeasured caveat, and no retrieval benchmark justifies a higher tier placement.
- **Multimodal: 15/100.** Text in, text out only.
- **Coding: 42/100.** Provisional from the family coding average (50.9 for GLM-4.5 and 41.5 for GLM-4.5-Air on SWE-Bench Verified and Terminal-Bench) discounted for the missing Flash-specific rows; no DeepSWE, Terminal-Bench 2.1 or SciCode figure exists for this checkpoint.
- **Cost efficiency: 100/100.** Listed as Free across input, output and cached reads on the Z.ai pricing page, and documented as completely free on the Chinese platform; the 2026-01-30 retirement is the only caveat.
- **Overall Score: 43.0/100.** Mean of the five quality dimensions (45 + 55 + 58 + 15 + 42 = 215 / 5). Best fit: a zero-cost text-only reasoning and agent helper for Chinese-language and coding workflows, usable now but withdrawn on 2026-01-30, with every quality dimension resting on labelled family proxies rather than model-specific measurements.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: Public internet research (Z.ai and BigModel model documentation and pricing pages, Z.ai benchmark chart images, OpenCode Zen model list); every number carries its source, and scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GLM-4.5-Flash model page (BigModel platform docs, Chinese)](https://docs.bigmodel.cn/cn/guide/models/free/glm-4.5-flash)
  - [GLM-4.5 model page (Z.ai docs)](https://docs.z.ai/guides/llm/glm-4.5)
  - [Z.ai pricing overview (Z.ai docs)](https://docs.z.ai/guides/overview/pricing)
  - [GLM-4.5 12-benchmark aggregate chart (Z.ai)](https://mintcdn.com/zhipu-32152247/fQm1SxNtD2jBDQ3i/resource/benchmark-0.png)
  - [GLM-4.5 agentic, reasoning and coding chart (Z.ai)](https://mintcdn.com/zhipu-32152247/fQm1SxNtD2jBDQ3i/resource/benchmark-1.png)
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.1_Flash_R2.md`, using the same headings.
