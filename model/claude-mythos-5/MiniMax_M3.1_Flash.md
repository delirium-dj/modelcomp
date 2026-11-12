# Claude Mythos 5 — findings by MiniMax M3.1 Flash

- Source: Anthropic (Claude Mythos 5, system card + platform docs + launch post)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's restricted, dual-use configuration of the same underlying LLM as Claude Fable 5, with the cyber (and, for trusted-access biology users, biology) safeguards lifted. It is Anthropic's strongest model for vulnerability discovery, CVE rediscovery and protein design, and is only available to organizations verified through Anthropic's Cyber Verification Program (Project Glasswing) or Life Sciences Verification Program.
- **Provider / access:** Anthropic Claude API (model ID `claude-mythos-5`), Amazon Bedrock (`anthropic.claude-mythos-5`), Google Cloud (Google managed, `claude-mythos-5`), Microsoft Foundry (`claude-mythos-5`). Messages API. Verification required; no public OpenCode Zen ID exists for Mythos 5.
- **Release / knowledge:** Released 2026-06-09; reliable and training data cutoff January 2026. Still listed as active (verification required), retirement not sooner than 2027-06-09, but superseded as "current Mythos model" by Mythos 5.2.
- **IDs:** `anthropic/claude-mythos-5` (repo ID), API `claude-mythos-5`. No Free ID exists on OpenCode Zen (the model is not in the Zen catalog).
- **Context window:** 1M tokens total, 128K max output (synchronous Messages API). Anthropic docs: 1M tokens is roughly 555k words on the current tokenizer.
- **Modalities:** Text and images in, text out; provider catalogs also list PDF input. Adaptive thinking always on (default effort `high`); tool calls supported; JSON/structured output supported via the API.
- **Pricing (as of 2026-11-12):** $10 / MTok input, $50 / MTok output, $1.00 / MTok cache read, $12.50 5-minute cache write, $20 1-hour cache write; Batch API 50% discount. Anthropic requires 30-day data retention on Mythos-class traffic for safety monitoring and does not train on it.
- **Architecture:** Proprietary; parameter count not disclosed. Same underlying LLM as Claude Fable 5 (Anthropic: "It's the same underlying model as Fable 5, but with the safeguards lifted in some areas").

### Raw benchmarks found

Agent / tool use:

| Benchmark | Value | Who ran it | Source / harness |
|---|---|---|---|
| Terminal-Bench 2.1 | 88.0% | Anthropic | Fable 5 and Mythos 5 system card |
| Terminal-Bench 2.1 (AA independent, Fable 5 = same model) | 84.6% | Artificial Analysis | terminalbench-v2-1 leaderboard |
| Terminal-Bench 2.1 (Vals, Fable 5 = same model) | 80.5% | Vals AI | Vals Terminal-Bench 2.1 |
| OSWorld-Verified | 85% | Anthropic | Fable 5 and Mythos 5 system card |
| BrowseComp | 88% | Anthropic | Fable 5 and Mythos 5 system card |
| CyberGym | 83.8% | Anthropic | Fable 5 and Mythos 5 system card |
| GDPval-AA | 1747 Elo | Anthropic (Fable 5 config, same system card) | Fable 5 and Mythos 5 system card |
| Tau2-bench | 98.5% | Artificial Analysis (Fable 5 = same model) | tau2-bench leaderboard |
| Tau3-Banking | 38.1% | Artificial Analysis (Fable 5 = same model) | tau3-banking leaderboard |
| AA EnterpriseOps-Gym | 51.1% | Artificial Analysis (Fable 5 = same model) | enterprise-ops-gym-aa leaderboard |
| AA Agentic Index | 51.0% | Artificial Analysis (Fable 5 = same model) | AA model page |
| terminalBenchHard | 62.9% | Artificial Analysis (Fable 5 = same model) | terminalbench-hard leaderboard |
| Claw-Eval / ClawProBench | no verified public score found | — | — |

Reasoning / knowledge:

| Benchmark | Value | Who ran it | Source / harness |
|---|---|---|---|
| GPQA Diamond | 94.1% | Anthropic | Fable 5 and Mythos 5 system card |
| GPQA Diamond (independent, Fable 5 = same model) | 92.6% (AA) / 93.2% (Vals) | Artificial Analysis, Vals AI | gpqa-diamond leaderboards |
| HLE | 64.5% with tools, 59% without tools | Anthropic | Fable 5 and Mythos 5 system card |
| HLE (independent, Fable 5 = same model) | 55.5% | Artificial Analysis | humanitys-last-exam leaderboard |
| USAMO 2026 | 97.6% | Anthropic | Fable 5 and Mythos 5 system card |
| FrontierMath v2 Tiers 1–3 | 87.0% | Epoch AI (Fable 5 = same model) | Epoch AI FrontierMath v2 leaderboard |
| FrontierMath v2 Tier 4 | 90.2% | Epoch AI (Fable 5 = same model) | Epoch AI FrontierMath v2 leaderboard |
| ARC-AGI-1 / ARC-AGI-2 | 98.5% / 89.2% | ARC Prize (Fable 5 = same model) | ARC Prize semi-private results |
| AA-LCR | 82.3% | Artificial Analysis (Fable 5 = same model) | AA long-context-reasoning leaderboard |
| CritPt | 28.6% | Artificial Analysis (Fable 5 = same model) | AA critpt leaderboard |
| Artificial Analysis Intelligence Index | 49.6 (Fable 5 = same model; unranked on BenchLM for Mythos 5) | Artificial Analysis | AA model page / BenchLM |
| AA-Omniscience accuracy / hallucination rate | 65.4% / 63.6% (Fable 5 = same model) | Artificial Analysis | AA omniscience leaderboard |
| AA-IFBench | 63.5% (Fable 5 = same model) | Artificial Analysis | AA ifbench leaderboard |

Coding:

| Benchmark | Value | Who ran it | Source / harness |
|---|---|---|---|
| SWE-bench Verified | 95.5% | Anthropic | Fable 5 and Mythos 5 system card |
| SWE-bench Verified (independent, Fable 5 = same model) | 95.0% | Vals AI | Vals SWE-bench |
| SWE-bench Pro | 80.3% | Anthropic | Fable 5 and Mythos 5 system card |
| SWE-bench Multilingual | 92.2% | Anthropic | Fable 5 and Mythos 5 system card |
| SWE-bench Multimodal | 54.9% | Anthropic | Fable 5 and Mythos 5 system card |
| LiveCodeBench | 89.8% | Vals AI (Fable 5 = same model) | Vals LiveCodeBench |
| AA-SciCode | 61.0% | Artificial Analysis (Fable 5 = same model) | scicode leaderboard |
| AA Coding Index | 76.5% | Artificial Analysis (Fable 5 = same model) | AA model page |
| FrontierCode 1.1 Main | 53.5% | Cognition (Fable 5 = same model) | Cognition FrontierCode 1.1 |
| CursorBench 3.1 / 3.2 | 70.6% / 70.5% | Cursor (Fable 5 = same model) | Cursor evals |
| DeepSWE | no verified public score found for Mythos 5 | — | — |

Long context:

| Benchmark | Value | Who ran it | Source / harness |
|---|---|---|---|
| NIAH single needle at 1M tokens (Fable 5 = same model) | 99.8% | Contra Collective (third-party lab) | Contra Collective long-context test, June 2026 |
| NIAH 10-needle at 500K tokens (Fable 5 = same model) | 94.2% | Contra Collective | Contra Collective long-context test |
| Multi-document reasoning at 800K tokens (Fable 5 = same model) | 64.1% | Contra Collective | Contra Collective long-context test |
| Code understanding at 500K tokens (Fable 5 = same model) | 78.4% | Contra Collective | Contra Collective long-context test |
| GraphWalks at 512K–1M | Leads the comparison; no numeric value published | Third-party write-up citing Anthropic positioning | andrew.ooo long-context comparison, June 2026 |
| MRCR v2 at 512K–1M | no verified public score found for this model (GPT-5.5 publishes 74.0%) | — | — |

### Conflicting evidence (vendor vs independent) and how it was resolved

- **Terminal-Bench 2.1:** Anthropic reports 88.0% for Mythos 5; independent runs of the same underlying model via Fable 5 give 84.6% (Artificial Analysis) and 80.5% (Vals AI). The vendor figure is the best case for its own harness. Resolution: the score uses the vendor number for the model ID but is anchored by the independent runs, so tool use is set at 88 rather than in the 90–100 frontier band.
- **HLE:** Anthropic reports 64.5% with tools and 59% without; Artificial Analysis reports 55.5% for the same underlying model (no tools). Resolution: both are listed; the reasoning score uses the stronger vendor-with-tools figure but is capped below frontier because the independent no-tools number and the Intelligence Index (49.6) are much lower.
- **GDPval-AA:** Anthropic reports 1747 Elo for the Fable 5 configuration in the shared system card; Artificial Analysis reports the normalized GDPval-AA at 55.5% and AA-Briefcase at 1785 Elo for Fable 5. These are different metrics on the same underlying model, not a contradiction. Resolution: GDPval is cited at the vendor Elo, with the independent normalized percentage shown alongside.
- **Safeguards vs capability:** Fable 5 (safeguards on) and Mythos 5 (safeguards lifted) are the same underlying model, so every independent Fable 5 measurement is a proxy for Mythos 5 rather than a direct Mythos 5 measurement. Resolution: proxy rows are labelled "Fable 5 = same model" everywhere; on cyber and biology tasks Mythos 5 is expected to match or beat the proxy (Anthropic reports 83.8% CyberGym and 89.6% CVE rediscovery style results only for Mythos-class models).
- **Access vs availability:** Anthropic's own announcement says Mythos 5 was "initially deployed through Project Glasswing" and is restricted, while the platform docs list it on Claude API, Bedrock, Google Cloud and Foundry. Resolution: availability means access is gated by verification on every listed platform, not that it is generally purchasable.

### Notes on identity

- Claude Mythos 5 is **not a distinct model** from Claude Fable 5; only the safeguards differ (Anthropic's own wording: "the same underlying model as Fable 5, but with the safeguards lifted in some areas"). Anthropic also names Fable and Mythos as one family with a shared system card.
- The folder's canonical ID `anthropic/claude-mythos-5` matches the Claude API ID `claude-mythos-5`. The meta.json `officialUrl` (`https://www.anthropic.com/news/claude-mythos-5`) returns HTTP 404; the live announcement is `https://www.anthropic.com/news/claude-fable-5-mythos-5`, and the model hub page is `https://www.anthropic.com/claude/mythos`.
- Mythos 5 is the **previous** Mythos release: Anthropic's model hub states "Claude Mythos 5.2 is the current Mythos model", with Mythos 5.1 (2026-09-01) and Mythos Preview (April 2026) between them. Mythos 5 remains active but is a superseded configuration.
- Identity caveat for scoring: because Mythos 5 is access-restricted, no independent lab benchmarked the `claude-mythos-5` endpoint directly. Every independent number in this report is from the identical Fable 5 weights.

### Normalized scores (1–100)

- **Tool use: 88/100.** Frontier-grade agentic work — Terminal-Bench 2.1 88.0% (vendor) with 84.6% AA and 80.5% Vals runs on the identical Fable 5 weights, OSWorld-Verified 85%, BrowseComp 88%, GDPval-AA 1747 Elo, Tau2-bench 98.5% — but capped below the 90–100 band because Tau3-Banking is only 38.1% (frontier reference is 50%+) and no Claw-Eval score exists for this model.
- **Reasoning: 92/100.** GPQA Diamond 94.1% (vendor) with independent confirmation at 92.6% (AA) and 93.2% (Vals), HLE 64.5% with tools, USAMO 2026 97.6%, FrontierMath v2 Tier 4 90.2%, ARC-AGI-1 98.5% — all at or above frontier reference (GPQA 90%+, HLE 40%+); capped because the AA Intelligence Index for the same weights is 49.6 and AA-LCR is 82.3% rather than 95%+ to 1M.
- **Context window: 97/100.** Full 1M-token context with 128K max output (Anthropic docs) puts it in the top tier; an independent lab measured 99.8% single-needle retrieval at 1M on the same weights, but multi-needle retrieval at 500K was 94.2% and multi-document synthesis at 800K fell to 64.1%, so it is not a clean 100.
- **Multimodal: 78/100.** Image input is supported (CharXiv 93.5%, SWE-bench Multimodal 54.9%, OfficeQA Pro 57.9% on the same weights) and provider catalogs list PDF input, but there is no native video or audio input and the 1M-token window is heavily text-oriented, so it sits in the PDF-in band rather than the omni band.
- **Coding: 92/100.** SWE-bench Verified 95.5% (independent Vals 95.0%), SWE-bench Pro 80.3%, SWE Multilingual 92.2%, AA-SciCode 61.0% (above the 55% frontier reference), AA Coding Index 76.5% (above 70%), LiveCodeBench 89.8% — capped only by the absence of a public DeepSWE number for Mythos 5 and the modest CursorBench 70.5–70.6%.
- **Cost efficiency: 30/100.** $10 / MTok input and $50 / MTok output (plus $1.00 cache read) sits at the most expensive tier in this comparison; 30-day mandatory data retention adds a non-price caveat for restricted-access use.
- **Overall Score: 89.4/100.** Mean of Tool 88 + Reasoning 92 + Context 97 + Multimodal 78 + Coding 92 = 447 / 5 = 89.4. Best fit: unrestricted frontier-class reasoning, coding and long-horizon agentic work for organizations that can pass Anthropic's cyber or life-sciences verification.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: Fresh public web research (Anthropic launch post, platform model docs, system-card PDF landing pages, BenchLM benchmark ledger, Artificial Analysis model and evaluation leaderboards, Vals AI mirrors, Anthropic model hub, third-party long-context lab write-ups). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5 and Claude Mythos 5 — launch announcement (Anthropic, 2026-06-09)](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Claude Mythos 5 — Claude Platform model reference (specs, pricing, capabilities)](https://platform.claude.com/docs/en/models/mythos-5/overview)
  - [Claude Fable 5 and Claude Mythos 5 system card (PDF)](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf)
  - [BenchLM — Claude Mythos 5 benchmark ledger](https://benchlm.ai/models/claude-mythos-5)
  - [Artificial Analysis — Terminal-Bench 2.1 leaderboard (independent run of the same weights)](https://artificialanalysis.ai/evaluations/terminalbench-v2-1)
  - [BenchLM — Terminal-Bench benchmark family leaderboards (2.1 / 4.0 / 4.1 mirrors)](https://benchlm.ai/benchmarks/terminal-bench)
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.
