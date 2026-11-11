# Claude Opus 5.5 — findings by Qwen 4 Max

- Source: Anthropic/claude-opus-5-5
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's Opus-class flagship (first model of the Claude 5.5 family), positioned as the default starting point for most workloads — agentic coding, computer use, and knowledge work at ~40% lower task cost than Opus 5. Not a tier/alias of another entry; Anthropic positions Fable 5.1 for the hardest reasoning and longest agentic runs instead.
- **Provider / access:** Anthropic Claude Platform (Messages API) as `claude-opus-5-5`; Amazon Bedrock `anthropic.claude-opus-5-5` (US-geo + Global routing); Google Cloud Vertex AI and Microsoft Foundry under `claude-opus-5-5`. Also in Claude apps on Pro/Max/Team/Enterprise (no Free plan).
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff June 2026 (per Hokai's read of the system card). Availability commitment on Anthropic platforms no sooner than 2027-09-22.
- **IDs:** `anthropic/claude-opus-5-5` (dateless pinned snapshot). No Free ID exists on OpenCode Zen; no free API tier (paid pay-as-you-go only).
- **Context window:** 1,000,000 tokens total (default and ceiling); 128,000 max output via synchronous Messages API, 300,000 via Message Batches API with `output-300k-2026-03-24` beta header (verified via Hokai spec page + armes.ai, consistent with Anthropic's ProgramBench full-window runs).
- **Modalities:** Text, image, PDF in (Files API / document support); text out. Adaptive thinking always on — effort parameter (low/medium/high/xhigh/max, default medium) is the sole reasoning control; thinking can no longer be disabled. Tool calls both directions, computer use via `computer_toolset_20260801`, code execution, server-side web search/fetch. No audio/video input, no image output.
- **Pricing (as of 2026-11-11):** $4.00 in / $20.00 out per 1M; cache reads $0.20/M (5-min TTL writes $5/M, 1-hour $8/M); Batch API 50% off ($2/$10); research-preview Fast Mode $8/$40 (up to 2.5x speed). Zero-data-retention available for eligible enterprises; API data not trained on by default.
- **Architecture:** Proprietary; parameter count and architecture undisclosed. Safeguards: cybersecurity tasks transparently re-route to Opus 4.8, biology/frontier-LLM-dev tasks to Opus 5 (verification programs exist); preserved thinking anti-distillation for accounts created on/after 2026-08-31; EU AI Act watermarking.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (**agentic terminal coding**): **66.4%** (Anthropic launch table, xhigh effort, ±2.6 pts; vs Opus 5 52.3%, Fable 5.1 55.8%, GPT-6 Astra 57.9%)
- OSWorld 2.1 (**computer use**): **81.8%** partial (Anthropic launch table; vs Fable 5.1 80.7%, Opus 5 74.0%)
- GDPval-AA v2.1 (**knowledge work, Artificial Analysis**): **1846 Elo** (Anthropic table; vs Fable 5.1 1735, Opus 5 1708, GPT-6 Astra 1542)
- AutomationBench (**business workflows, Zapier-run**): **40.0%** (early-access run without fallback models; safeguard interventions counted as failures)
- FrontierCode v1.1 Main (**agentic coding**): **54.4%** at max effort / 54.6% at default medium (Anthropic; beats GPT-6 Astra's 53.3% top score)
- CursorBench 4.0 (**agentic coding**): **57.8%** max / 52.5% default (Anthropic; vs GPT-5.6 Sol 41.7%)
- Terminal-Bench-Science 0.1 (**agentic science**): **58.7%** (Anthropic, ±3.5–5 pts; GPT-6 Astra 64.6% leads this one)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found
- Prompt-injection resistance: ties Fable 5.1 for lowest injection success rate in Gray Swan's run (Anthropic-reported, qualitative)

Reasoning / knowledge:

- HLE (Humanity's Last Exam): **67.7%** with tools (Anthropic table; vs Fable 5.1 65.6%, Opus 5 63.6%, GPT-6 Astra 57.2%)
- GPQA Diamond: not published for this release — the 2026-09-22 system card omits it (Hokai); no verified public score found
- Artificial Analysis Intelligence Index: **58** (Sep 2026 snapshot, cited by Hokai and RankLLMs; index version not stated in either; RankLLMs composite 68.6, rank #2)
- LCR / MLCR / CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found (Anthropic reports 16/18 internal research reports passed a fact-check quality bar vs 0 for Opus 5/Fable 5.1 — internal, not a public benchmark)

Coding:

- SWE-bench Pro: **89.9%** (Anthropic system card, vendor harness; vs Opus 5 79.2%, Fable 5.1 81.2%)
- SWE-bench Multilingual: **93.9%** (Anthropic system card; vs Opus 5 89.5%)
- SWE-bench Multimodal: **61.4%** (Anthropic system card; vs Opus 5 59.4%)
- SWE-bench Verified: not published for this release (system card omits it; Hokai) — no verified public score found
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- ProgramBench (Anthropic long-context evaluation) run across context lengths up to the full 1M-token window (Hokai); no public MRCR/RULER/GraphWalks retrieval numbers found.

### Normalized scores (1–100)

- **Tool use: 96/100.** Leads Terminal-Bench 4.0 (66.4%), OSWorld 2.1 (81.8%), GDPval-AA v2.1 (1846 Elo) and AutomationBench among published peers; capped by missing Tau-bench evidence and safeguard re-routing that depresses cyber-task completion.
- **Reasoning: 93/100.** HLE 67.7% with tools is the best published figure in Anthropic's comparison table; AA Intelligence Index 58 (RankLLMs composite #2) keeps it just below the top composite spot; GPQA/AIME omitted this release, so no independent science-reasoning triangulation.
- **Context window: 100/100.** 1M tokens default-and-ceiling tier with 128K synchronous output (300K batch) and vendor ProgramBench runs across the full window — top tier on both capacity and measured usage.
- **Multimodal: 72/100.** Text + image + PDF input with strong chart/diagram reading (Chartography 89.0% with tools) and SWE-bench Multimodal 61.4%; capped by no audio/video input and no image/audio output.
- **Coding: 96/100.** SWE-bench Pro 89.9% leads the published Claude table, plus FrontierCode and CursorBench leads at lower cost per task; capped by the absent SWE-bench Verified number (no independent-harness triangulation).
- **Cost efficiency: 55/100.** $4/$20 is premium (Hokai: pricier than 81% of 100 GA models), softened by $0.20 cache reads, 50%-off Batch, and Anthropic's measured ~40% lower cost per task vs Opus 5; no free lane.
- **Overall Score: 91.4/100.** Mean of the five quality dims (96+93+100+72+96)/5 = 91.4. Best-fit: default frontier pick for long-horizon agentic coding, computer use, and professional knowledge work where per-task cost matters more than per-token price.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (vendor launch page + system-card reporting by independent trackers); scores are normalized 1–100 interpretations, not official vendor scores. Vendor-reported figures are labelled with their harness; benchmarks omitted by the vendor are marked as such, never inferred.
- Reference URLs:
  - [Introducing Claude Opus 5.5 — Anthropic](https://www.anthropic.com/claude-opus-5-5)
  - [Claude Opus 5.5: SWE-bench 89.9% and 1M Context — Hokai](https://hokai.io/hub/models/claude-opus-5.5)
  - [Claude Opus 5.5 Benchmarks, Pricing & Specs — RankLLMs](https://rankllms.com/models/claude-opus-5-5/)
  - [Opus 5.5 Parameters, Benchmarks & Specs — armes.ai](https://armes.ai/docs/models/anthropic/claude-opus-5.5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.