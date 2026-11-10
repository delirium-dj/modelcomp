# MiMo-V2.6-Pro — findings by QoDuck

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro (Xiaomi MiMo flagship; open-weight "Pro" reasoning/agent tier)
- **Short description:** Xiaomi's flagship open-weight sparse-MoE model aimed at agentic, coding and long-context reasoning workloads, with omni-modal input (text/image/speech/video) and text output. Marketed at launch as the strongest open-source model; independent current-vintage scoring places it well below that claim on the composite intelligence index.
- **Provider / access:** Xiaomi MiMo API `mimo-v2.6-pro` at `https://api.xiaomimimo.com/v1` (Chat Completions); OpenRouter `xiaomi/mimo-v2.6-pro`; DeepInfra, GMICloud, StreamLake, PrimaLabs route the same open weights. Self-hostable from Hugging Face `XiaomiMiMo/MiMo-V2.6-Pro-RL`.
- **Release / knowledge:** Released 2026-09-21. Knowledge cutoff not documented on the official card or aggregators (stated as unverified). Predecessors MiMo-V2.5-Pro / V2.5 retired 2026-10-21.
- **IDs:** `xiaomi/mimo-v2.6-pro` (OpenRouter); `mimo-v2.6-pro` (Xiaomi API). Open weights: `XiaomiMiMo/MiMo-V2.6-Pro-RL` (Hugging Face). No separate "Free" hosted ID; free only via self-hosting the MIT weights.
- **Context window:** 1,048,576 tokens (1M) total; max output 131,072 (DeepInfra) / 128K (official card). Verified via official model page + DeepInfra guide + Artificial Analysis.
- **Modalities:** Input text + image + audio (speech) + video (omni-modal); output text only. Reasoning: yes ("Deep Thinking", toggleable; no `reasoning_effort` parameter). Tool calls: yes. JSON / structured output: yes. Streaming + web search + context caching supported.
- **Pricing (as of 2026-11-10):** Official Xiaomi $0.435 in / $0.87 out / $0.0036 cache-hit per 1M (99% cache discount). OpenRouter routes: GMICloud $0.3263/$0.6525, DeepInfra $0.387/$0.783, Xiaomi $0.435/$0.87, StreamLake $0.522/$1.044, PrimaLabs $4/$8. Blended ~$0.18; effective agent-loop input ~$0.13 with caching. MIT open weights → $0 marginal self-host. Rate limits RPM 100 / TPM 10M. Speed 53–55 tok/s but ~36.5–36.8 min per Intelligence-Index task (notably slow); ~$0.26/task.
- **Architecture:** Sparse MoE, 1.02T total / 42B active params, 384 experts (8 active per token) per DeepInfra. Open weights, MIT license.

### Raw benchmarks found

> Measured numbers with source/harness for traceability. Conflicts reconciled in
> "Conflicting-results notes" below. "no verified public score found" = not published
> for this exact Pro ID; never substituted with another MiMo variant's numbers.

Agent / tool use:

- Terminal-Bench 2.1 (**hard**): **89.9%** (DeepInfra) — clears the ~88% top-tier anchor.
- Terminal-Bench 4.0 (**harder/current**): **34.8%** (Artificial Analysis) / **34.9%** (DeepInfra) — weak; Xiaomi's own comparator lists Opus 5 at 49.0 and GPT-6 Astra at 59.6.
- GDPval-AA (**Elo**): **1692.05** (AA, CI 1672–1712) / GDPVal 2.1 **1673** (DeepInfra) — near but below the ~1750 top-tier mark (Opus 5 ≈1708).
- AutomationBench v1.0.6: **53.1%** (DeepInfra).
- Toolathlon-Verified: **76.9%** (DeepInfra) — strong.
- ExploitBench: **47.9%**; CyberGym: **94.0**; JobBench: **62.0** (DeepInfra) — cybersecurity exploit notably weak per mindstudio.
- Tau3-Banking / Tau2-Bench: no verified public score found for this Pro ID.
- Claw-Eval / ClawProBench / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- HLE (Humanity's Last Exam): **49.4%** (AA) — clears the 40% anchor.
- HLE-Diamond: **15.2%** (AA) — weak on the hardest subset.
- Artificial Analysis Intelligence Index: **29.89 (~30), #4/26** (current AA v5.0); launch claim **46.32** (Xiaomi, v4.3 vintage) — see conflict note.
- SciCode: **60.9%** (commandcode) — clears the 55% coding/reasoning anchor.
- Long-context reasoning: **86.3** (commandcode).
- AA-Omniscience: accuracy **34.8%**, hallucination **60.2%**, net **−4.47** (AA) — poor knowledge reliability.
- GPQA Diamond: no verified public score found for this Pro ID (null on AA).
- AIME 2025 / ARC-AGI-1 / ARC-AGI-2 / CritPt / LCR / MLCR: no verified public score found.
- LiveBench Reasoning 0.80, Global 0.75 (apxml; likely stale 0–1 fractions, treated as provisional).

Coding:

- DeepSWE v1.1: **71.9%** (DeepInfra) — just below the 74% top-tier anchor (Opus 5 ≈74.0, GPT-5.6 Sol ≈73.0).
- Terminal-Bench 2.1: **89.9%** (DeepInfra) — clears the 85% coding anchor.
- SciCode: **60.9%** (commandcode) — clears 55%.
- FrontierCode 2.0: **24.0%** (AA) — weak on harder current coding-agent eval.
- LiveBench Coding 0.81 (#15), WebDev Arena 1624 (#22), Text Arena 1479 (#27) (apxml; provisional fractions). Overall rank #50, Coding rank #23 (apxml).
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench / AA-SciCode / Coding Index: no verified public score found for this Pro ID (Coding Index "not yet scored" per commandcode). NOTE: a widely circulated SWE-bench 72.55% figure is MiMo **2.5**, NOT 2.6 Pro — excluded.

Long context:

- 1,048,576-token (1M) window confirmed (official + AA + DeepInfra). Long-context reasoning **86.3** (commandcode). No MRCR / RULER / GraphWalks needle-retrieval-at-length result published; no verified ≥98% retrieval at 512K+.

Multimodal:

- Omni-modal input (text/image/speech/video) confirmed by official card, AA and DeepInfra; text-only output. MMMU-Pro / Video-MME / audio benchmarks: no verified public score found (MMMU-Pro null on AA) — modality coverage is documented but quality is unmeasured.

### Normalized scores (1–100)

> Derived from the raw numbers above per `model-comparison.md`. Overall = half-up
> mean of the five quality dims; Cost efficiency scored independently and excluded.

- **Tool use: 88/100.** Terminal-Bench 2.1 89.9% clears the ~88% anchor, Toolathlon-Verified 76.9% and GDPval-AA 1692 (just under the ~1750 top-tier mark, near Opus 5's 1708) are strong; capped below 90 by weak Terminal-Bench 4.0 34.9% (vs Opus 5 49.0), TB-Science 5.7% and ExploitBench 47.9%.
- **Reasoning: 80/100.** HLE 49.4% clears the 40% anchor and SciCode 60.9% / long-context reasoning 86.3 are solid; capped by the current AA Intelligence Index ~30 (v5.0, far below the 60 top-tier mark), weak HLE-Diamond 15.2%, unpublished GPQA Diamond, and poor knowledge reliability (AA-Omniscience hallucination 60.2%, net −4.47).
- **Context window: 95/100.** 1,048,576-token window meets the ≥1M tier (95–100); no published ≥98% needle-retrieval at 512K+ to justify 100 (long-context reasoning 86.3 is a reasoning score, not a retrieval-at-length metric).
- **Multimodal: 88/100.** Confirmed omni-modal input (text + image + speech/audio + video) reaches the +audio-in band on coverage; capped below 90 because output is text-only and no measured MMMU-Pro / video / audio benchmark substantiates top-tier multimodal quality.
- **Coding: 85/100.** Terminal-Bench 2.1 89.9% clears the 85% anchor and SciCode 60.9% clears 55%, with DeepSWE 71.9% just under the 74% mark; capped by weak Terminal-Bench 4.0 34.9% and FrontierCode 2.0 24.0% on harder current coding-agent evals, and unpublished SWE-bench Verified / LiveCodeBench.
- **Cost efficiency: 96/100.** $0.435 in / $0.87 out per 1M with $0.0036 cache-hit (99% discount) and MIT open weights (self-hostable) is far below the $1.25/$4.25≈88 anchor — near-free hosted inference plus free weights; capped just under 100 because the hosted endpoint is not literally $0.
- **Overall Score: 87.2/100.** Half-up mean of (88 + 80 + 95 + 88 + 85) / 5 = 436 / 5 = 87.2 (Cost excluded). Best fit: budget-conscious, self-hostable agentic/coding and 1M-context workloads where omni-modal input and ultra-low cost matter more than frontier composite intelligence or hard science/exploit tasks.

### Conflicting-results notes

- **Intelligence Index 46.32 (launch) vs ~30 (current):** Xiaomi's launch marketing claimed AA Index 46.32 ("strongest open-source, surpassing Kimi K3 & Qwen3.8 Max"; commandcode echoed 46.3, #14/74) — a v4.3-vintage value. The current AA v5.0 page reports **29.89 (~30), #4/26** (DeepInfra: #3 of 21 in the >150B class, median 23). Resolved in favor of the current AA value (~30) as authoritative; weak components (TB4.0 34.8%, TB-Science 5.7%, hallucination 60.2%) corroborate ~30, and apxml's "0.30" aligns. The launch claim is documented as a stale-vintage marketing figure, not used for scoring.
- **Open vs closed:** apxml labeled the model "proprietary/closed"; the official card, AA and DeepInfra confirm **open weights, MIT license**, Hugging Face `XiaomiMiMo/MiMo-V2.6-Pro-RL`. Resolved: open-weight (apxml wrong).
- **GDPval 1692 vs 1673 / TB4.0 34.8 vs 34.9:** minor source/harness differences (AA GDPval-AA Elo 1692.05 vs DeepInfra GDPVal 2.1 1673; AA TB4.0 34.8 vs DeepInfra 34.9). Both ranges cited; neither changes the dimension caps.
- **SWE-bench 72.55% misattribution:** a circulating LinkedIn figure belongs to MiMo **2.5**, not 2.6 Pro — explicitly excluded to avoid variant contamination.
- **apxml 0–1 fractions:** LiveBench Coding 0.81 / Reasoning 0.80 / Global 0.75 and arena Elos are treated as provisional (possibly stale normalization); not used as primary anchors.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-10
- Method: public internet research — 4+ independent web searches plus direct fetches of the official Xiaomi model page, Artificial Analysis, DeepInfra, commandcode, apxml and OpenRouter; official + independent sources cross-compared and conflicts reconciled (current AA v5.0 Index preferred over launch-vintage marketing). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xiaomi MiMo-V2.6 official model page](https://mimo.mi.com/models/en-US/mimo-v2.6-pro)
  - [Xiaomi MiMo-V2.6 announcement](https://mimo.xiaomi.com/mimo-v2-6)
  - [Artificial Analysis — MiMo-V2.6-Pro](https://artificialanalysis.ai/models/mimo-v2-6-pro)
  - [DeepInfra — MiMo-V2.6-Pro complete guide](https://deepinfra.com/blog/mimo-v2-6-pro-complete-guide)
  - [commandcode — MiMo-V2.6-Pro](https://commandcode.ai/models/mimo-v2-6-pro)
  - [apxml — MiMo-V2.6-Pro](https://apxml.com/models/mimo-v2-6-pro)
  - [OpenRouter — xiaomi/mimo-v2.6-pro](https://openrouter.ai/xiaomi/mimo-v2.6-pro)
  - [mindstudio — Xiaomi MiMo-V2.6-Pro open model](https://www.mindstudio.ai/blog/xiaomi-mimo-v2-6-pro-open-model)
  - [Hugging Face — XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.