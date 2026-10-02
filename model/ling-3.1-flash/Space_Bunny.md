# Ling 3.1 Flash — findings by Space Bunny

- Source: inclusionAI / Ant Group (`inclusionai/ling-3.1-flash`; OpenCode Zen free route `opencode/ling-3.1-flash-free`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** inclusionAI's (Ant Group) newest Ling-family fast-tier model — a ~560B-total-parameter hybrid-reasoning Mixture-of-Experts with ~25B active per token, aimed at coding, multi-step analysis and tool-using agents, search and office work. Not an alias: it is the direct successor to Ling 3.0 Flash at roughly 5× the active-parameter budget (124B/5.1B).
- **Provider / access:** Hosted API. Standard ID `inclusionai/ling-3.1-flash`; OpenAI-compatible endpoints via Vercel AI Gateway (served by Novita), OpenRouter (served by NovitaAI), and a free promotional route `inclusionai/ling-3.1-flash-free` that is also listed on OpenCode Zen as `ling-3.1-flash-free`. Chat Completions style; reasoning and tool calling supported.
- **Release / knowledge:** 2026-09-29 (inclusionAI launch, reported same day by ThreatFrontier and Build Fast with AI; OpenRouter's catalog lists Oct 2, 2026 as its own listing date). Knowledge cutoff not published.
- **IDs:** `inclusionai/ling-3.1-flash` (standard), `inclusionai/ling-3.1-flash-free` (promotional free route), `opencode/ling-3.1-flash-free` (OpenCode Zen). A Zen Free ID does exist as of 2026-10-02.
- **Context window:** **262,144 tokens actually served / 32,768 max output** (Vercel AI Gateway listing, corroborated by OpenRouter and models.dev). inclusionAI's design target is 1M tokens, but the model is deliberately capped at 256K for the current trial period — the full window and the open-weights release are both announced-but-undelivered, so this report scores the served 262K, not the 1M claim.
- **Modalities:** Text in / text out; reasoning (hybrid instant/reasoning) yes; tool calling yes; JSON/structured output reported by gateways. Text-only — the multimodal capabilities of sibling Ling variants (e.g. Ling 3.0 Flash VL) are explicitly **not** carried over.
- **Pricing (as of 2026-10-02):** **$0.00 in / $0.00 out** on the Vercel AI Gateway promotional route through **2026-10-13**, and $0 on the OpenRouter / Kilo / OpenCode Zen free routes. No paid per-token rate has been announced; the predecessor Ling 3.0 Flash shipped at $0.075 in / $0.22 out per 1M. Cache-hit rate on the live Vercel/Novita route measured 70.7%. **Privacy caveat:** the trial route is not documented as opting prompts out of provider training, lists no HIPAA coverage and names no data-residency region — keep proprietary source and customer data off it.
- **Architecture:** Proprietary hosted MoE, ~560B total parameters / ~25B active per token; hybrid reasoning (switchable instant/reasoning). Expert layout and attention design are unpublished — Ling 3.0 Flash used a Kimi-Delta-Attention + MLA 5:1 hybrid over 512 routed experts, but nothing confirms 3.1 inherits it. Weights were still absent from the inclusionAI Hugging Face organization as of 2026-10-02; an open-source release is promised, with no license named.
- **Speed:** 70 tokens/s sustained output and 1.39 s latency (P50, OpenRouter/Novita); Vercel lists ~88 tok/s and ~3.1 s on its current Novita route.

### Raw benchmarks found

> All figures below are **vendor-reported** from inclusionAI's single launch table (via ThreatFrontier, which reproduced the table verbatim, and Build Fast with AI, which reproduced the same numbers independently). None has been independently reproduced; Artificial Analysis and OpenRouter had no Ling 3.1 listing at launch. Comparison models in Ant's own table: DeepSeek-V4.1-Flash, Kimi K3, GLM 5.3, GLM 5.3 flash, Claude Opus 5, GPT-5.6 Sol.

Agent / tool use:

- MCP-Atlas: **83.00** (Ant launch table)
- BrowseComp: **91.67** (Ant launch table)
- AutomationBench: **52.5%**
- SkillsBench: **68.7%**
- Finance Agent v2: **57.9%**
- MultiChallenge: **69.78** — vs DeepSeek-V4.1-Flash 72.12, GLM 5.3 flash 62.60 (Ling 3.1 trails DeepSeek's flash model here)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon: no verified public score found

Reasoning / knowledge:

- HLE: **37.44%** — up sharply from Ling 3.0 Flash's 22.7%; trails DeepSeek-V4.1-Flash 39.20 and GLM 5.3 flash 39.90
- DRACO: **85.49%** — beats DeepSeek-V4.1-Flash 79.85 and GLM 5.3 flash 78.55
- WideSearch: **83.32%** — beats DeepSeek-V4.1-Flash 80.81 and GLM 5.3 flash 80.24
- CyberGym: **87.90%** — vulnerability reproduction; effectively ties DeepSeek-V4.1-Flash 88.10
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **not present** — BenchLM records the model as unranked with insufficient eligible comparative evidence
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- HealthBench Professional: **65.35%** — beats DeepSeek-V4.1-Flash 50.37 and GLM 5.3 flash 49.07
- **No safety evals published:** no red-team results, no jailbreak evaluation and no system card for Ling 3.1. The only outside security test found covers Ling 3.0 Flash, not 3.1, and does not transfer.

Coding:

- SWE-Bench Pro (SWE-Pro): **65.39%** — leads DeepSeek-V4.1-Flash 56.77 and GLM 5.3 flash 63.06; up from Ling 3.0 Flash's 56.6
- Terminal-Bench 2.1: **81.18%** — trails DeepSeek-V4.1-Flash 90.60 and GLM 5.3 flash 84.30
- Terminal-Bench 4.0: **40.40%** — leads DeepSeek-V4.1-Flash 31.20 and GLM 5.3 flash 32.80
- DeepSWE: **59.70%** — trails DeepSeek-V4.1-Flash 74.20 and GLM 5.3 flash 63.40
- SWE Atlas Codebase QnA: **55.9%**
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found
- SWE-bench Verified: no verified public score found

Long context:

- No verified long-context retrieval result reported (no MRCR / RULER / GraphWalks figure at any window length). The only verified fact is the served limit: 262,144 tokens in / 32,768 out, against an announced 1M design target currently capped at 256K for the trial.

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP-Atlas 83.00 and BrowseComp 91.67 are genuinely strong browsing/tool-calling numbers, backed by 68.7 SkillsBench and 69.78 MultiChallenge. Capped by the mid-50s AutomationBench (52.5) and Finance Agent v2 (57.9), and by the fact that it loses to DeepSeek-V4.1-Flash on MultiChallenge — Ant positions it for tool use but its agentic breadth is not yet best-in-class.
- **Reasoning: 70/100.** DRACO 85.49, WideSearch 83.32 and CyberGym 87.90 show real depth-research and security reasoning. The HLE 37.44 is the honest ceiling here — it sits *below* both DeepSeek-V4.1-Flash (39.20) and GLM 5.3 flash (39.90) despite ~5× the active parameters of its own predecessor, and no GPQA/AA Index figure exists to lift the estimate.
- **Context window: 72/100.** Scored on the 262,144 tokens actually served today, not the announced 1M ceiling — the trial explicitly caps context at 256K and the full window is an undelivered promise. 32,768 max output is comfortable for agentic work but modest next to 1M-class rivals.
- **Multimodal: 15/100.** Text-only in and out; 15 is the text-only floor. Vision exists in the sibling Ling 3.0 Flash VL but is explicitly not a capability of this model.
- **Coding: 76/100.** SWE-Pro 65.39 and Terminal-Bench 4.0 40.40 lead their flash-tier comparison field, and Terminal-Bench 2.1 81.18 is strong. Capped by DeepSWE 59.70 (well behind DeepSeek-V4.1-Flash 74.20) and the weaker 55.9 SWE Atlas Codebase QnA — real coding-agent ability, not a coding champion.
- **Cost efficiency: 100/100.** $0 in / $0 out through 2026-10-13 on Vercel AI Gateway, and $0 on the OpenRouter / Kilo / OpenCode Zen free routes. Paid pricing is unannounced; Ling 3.0 Flash's $0.075/$0.22 suggests it will remain very cheap. Score reflects the evaluated free tier only — and the trial route's training/retention posture is unsuitable for proprietary data.
- **Overall Score: 62/100.** Mean of the five quality dims (78 + 70 + 72 + 15 + 76) = 62.2 → 62. Best fit: free-tier agentic coding and deep-research work on non-sensitive data, where MCP-Atlas 83.00 and BrowseComp 91.67 carry the most weight; the 15 text-only multimodal floor and the HLE-37.44 reasoning ceiling keep it well short of a general-purpose flagship pick.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-02
- Method: Public internet research, independent of peer findings. Sources: **inclusionAI's launch benchmark table as reproduced verbatim by ThreatFrontier** ("Ling-3.1-flash: Ant's Best Flash Model Yet, and It Scores 87.9 on CyberGym", Alex Kim, updated Sep 30 2026) for the full Ant comparison table (SWE-Pro 65.39, Terminal-Bench 4.0 40.40, Terminal-Bench 2.1 81.18, HealthBench Professional 65.35, DRACO 85.49, WideSearch 83.32, CyberGym 87.90, DeepSWE 59.70, HLE 37.44, MultiChallenge 69.78) and for the MCP-Atlas 83.00 / BrowseComp 91.67 figures, the 560B/25B architecture, the 1M-designed-vs-256K-trial context split, the unannounced paid price and the absent safety card; **Build Fast with AI's "Ling 3.1 Flash Review: Benchmarks, Price, Coding & Is It Worth It?" (Oct 1 2026)** for the independently reproduced subset (AutomationBench 52.5, SkillsBench 68.7, CyberGym 87.9, Finance Agent v2 57.9, DRACO 85.5, Terminal-Bench 4 40.4, SWE Atlas Codebase QnA 55.9, HealthBench Professional 65.3), the `inclusionai/ling-3.1-flash` / `-free` ID pair, the 2026-10-13 promo end date and the ~3.1 s / ~88 tok/s Vercel figures; **Vercel AI Gateway** for the served 262,144-token context, 32,768 max output and reasoning/tool-calling capabilities; **OpenRouter** for the 262K/32,768 limits, the Oct 2 2026 listing date, the single NovitaAI provider and measured 70 tok/s / 1.39 s P50; **models.dev** for the 2026-09-29 release date and $0.00/$0.00 pricing; **BenchLM** for the negative finding that the model is unranked for lack of eligible comparative evidence; and **OpenCode Zen's public model list** (`https://opencode.ai/zen/v1/models`) confirming the `ling-3.1-flash-free` Zen ID exists. All benchmark numbers are vendor-reported and independently unreproduced; scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Ling_3.1_Flash_Recheck.md`, using the same headings. **Re-run this file once the free trial lapses on 2026-10-13** — the 100/100 cost score is time-boxed to that promo and the paid rate is still unannounced. Also re-run when inclusionAI publishes the open weights (an announced, undelivered commitment) or lifts the 256K trial cap toward the 1M design target, either of which moves the context and cost dimensions.


