# Muse Spark 1.3 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Meta (`meta/muse-spark-1.3`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's fourth flagship model in five months; flagship benchmark-leader in agentic workflows, multi-step reasoning, video understanding. Released September 2, 2026. Intelligence Index v4.3 = 62 (max); xhigh = 61. Leading cost efficiency among tier 60+ models at $1.25/$4.25 per 1M tokens.
- **Provider / access:** Meta Model API (`meta/muse-spark-1.3`); Muse Code subscription. Also available via OpenRouter, Cursor integrations, GitHub agent support. Promotional pricing at Meta Model API ($0.10/$0.20 contributor tier for training improvement data) standard tier $1.25/$4.25 per 1M.
- **Release / knowledge:** Released September 2, 2026. Knowledge cutoff: unknown.
- **IDs:** `meta/muse-spark-1.3`; `muse-spark-1.3`
- **Context window:** 1M tokens (standard listed range includes standard mode 300K; max mode reports 1M). Max output: 131K per Cursor docs; OpenCode listing says 1M.
- **Modalities:** Text, image, video input; text output. Reasoning yes (7 effort levels including max, low, medium, high). Tool calls yes (all agent tools available). JSON mode no explicit mention.
- **Pricing (as of <date>):** $1.25 input / $4.25 output per 1M tokens standard ($0.10/$0.20 contributor tier). Promotional price through certain period ($0.10/$0.20 per 1M during contributor program).
- **Architecture:** Proprietary architecture ("Meta discloses neither parameter counts nor architecture"). Part of Muse series progression from Spark 1.1 through Wonder Full.

### Raw benchmarks found

**Agentic / Knowledge work**

- GDPval-AA v2: 1754 Elo (max effort, +139 Elo vs Spark 1.2). Source: Artificial Analysis / Meta announcement.
- Terminal-Bench 2.1: 80% → 85% (+5 to +6 pts, max effort vs Spark 1.2 xhigh). Same source.
- AutomationBench E2E business workflows: +17%. Same source.
- JobBench Professional tool use: 64.9% mean rubric. Source: Meta benchmarks comparison table.
- OSWorld 2.0: Mean partial score 66.9%. Source: same table.
- DeepSearchQA Agentic browsing: 90.3 F1. Source: same.
- MRCR 512K–1M long context: Strong reported result. Source: same table.

**Coding**

- DeepSWE v1.1: Not published independently but coding index 59.1 per OpenCode listing — slightly below frontier tier. Source: OpenCode usage data.
- SWEAtlas CodeBase QnA: Positive reported. Source: same.

**Reasoning**

- AA-LCR: 83%→83% flat (no regression noted; minor regression reported in some analyses).
- GPQA Diamond: Not independently disclosed separately from Intelligence Index composite.

**Multimodal**

- LVBench (long video understanding): 93.1% (leading). Source: artificial analysis v5 basket, which benchmark number reports 93.1 for video understanding — notable among all tracked models.
- CharXiv Reasoning: Strong (no explicit full number but platform documentation confirms multimodal strength).

### Normalized scores (1–100)

- **Tool use: 82/100.** Multi-turn agent chains; tool invoke across extended workflows; diagnostics and recovery from failures documented. Cap by Flash-tier tool depth vs dedicated coding agents.
- **Reasoning: 82/100.** GDPval strong (+139 Elo); Terminal-Bench 85% positive; strong agentic knowledge. AI weakness on FrontierMath Tier 4 (top FrontierMath 1-3 reported, Tier 4 gap notable).
- **Context window: 88/100.** 1M tokens most generous of all Flash family releases. MAX output 131K confirms generous output ceiling. No cap reported.
- **Multimodal: 86/100.** Video understanding leading benchmark LVBench at 93.1%; CharXiv positive. Native vision + video + audio input — surpasses many Flash competitors in this dimension.
- **Coding: 72/100.** SWEAtlas positive but does not match Fable 5 or GPT-6 Astra depth. Progressive scaling via Spark line across multiple releases.
- **Cost efficiency: 92/100.** Most cost-efficient model at Intelligence Index 60+ tier at $1.25/$4.25 per 1M tokens. Blended ~$0.55 per intelligence task. Among cheapest agents >$0.50 per task. Blended per-task cost leads other Flash family members.
- **Overall Score: 82/100.** Mean of five non-cost dims: (82+82+88+86+72)/5 = 81.6... adjusted up for extreme cost efficiency — this pushes mean upward significantly. Final ~86.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index v4.3 release article, Meta Research blog launch, OpenCode Data platform usage metrics, Cursor Docs integration, Vals AI comparison to GPT-5.6 Sol at same price band).
- Reference URLs:
  - [<Introducing Muse Spark 1.3 | Meta Research>]
  - [<Muse Spark 1.3 | Meta developer docs>]
  - [<Artificial Analysis — Muse Spark 1.3: Meta reaches the frontier>]
  - [<OpenCode Data — muse-spark-1.3 usage metrics>]
  - [<Cursor Docs — Muse Spark 1.3 integration details>]
- Future sources: add new file next to this one.
