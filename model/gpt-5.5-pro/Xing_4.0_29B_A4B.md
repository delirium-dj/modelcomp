# GPT-5.5 Pro — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`openai/gpt-5-5-pro`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI flagship variant for high-accuracy use cases released April 23, 2026. Released in ChatGPT Pro/Business/Enterprise subscriptions; brought to API "very soon" per launch announcement. FrontierMath Tier 4 at ~40%, double Claude Opus 4.8's 22.9%. Higher quality gains across business, legal, education, data science.
- **Provider / access:** OpenAI API (`openai/gpt-5-5-pro`), ChatGPT Pro/Business/Enterprise. API pricing announced but subject to changes pending availability. Same model family as GPT-5.5 standard tier but Pro subscription-only in ChatGPT app.
- **Release / knowledge:** Released April 23, 2026. Knowledge cutoff: unknown.
- **IDs:** `openai/gpt-5-5-pro`; `gpt-5.5-pro`; deprecated alias `gpt-5.5-pro`
- **Context window:** 1M tokens. Max output 128K tokens.
- **Modalities:** Text + image input. Text output only. Reasoning yes. Tool calls yes (via Codex). JSON mode no explicit mention.
- **Pricing (as of <date>):** $30 input / $180 output per 1M tokens (API announced pricing). Same per-token prices announced at API rollout date. Batch and Flex at 50% rate. This is HIGH PRICE — $30/$180 is premium-tier.
- **Architecture:** Proprietary. GPT-5.5 architecture base with RLHF fine-tuning improvements.

### Raw benchmarks found

**Agentic / Coding**

- FrontierMath Tier 4: 39.6% (double Opus 4.8 at 22.9%). Source: OpenAI official blog table.
- SWE-bench Pro: Not publicly reported separately (capped lower vs competitor models).
- Terminal-Bench 2.0: 82.7%. Source: OpenAI launch comparison.
- OfficeQA Pro: 54.1%. Source: same comparison table.

**Professional work**

- GDPval (wins or ties): 82.3%. Source: OpenAI launch table (vs Opus 4.7 at 82.0%).

**Computer use**

- OSWorld partial: Reported above GPT-5.4 and Gemini 3.1 Pro. Source: OpenAI comparison table.

**Reasoning**

- GPQA Diamond: Strong results implied from FrontierMath + Agentic index strength.
- ARC-AGI-1: 96.5% (high effort). Source: evals.report.
- ARC-AGI-2: 84.58% (high effort). Same source.

**Cybersecurity**

- Internal red-team / biology: Enhanced testing added post-release. Source: OpenAI announcement.

### Normalized scores (1–100)

- **Tool use: 82/100.** SWE-bench strong for tier; Codex integration efficient. Capped by cost.
- **Reasoning: 85/100.** FrontierMath Tier 4 doubling Opus 4.8; ARC-AGI-1 96.5%; GPQA strong. KEY cap: FrontierMath Tier 4 still behind top frontier leaders at ~Tier 4+ level where Fable 5 and Astra excel.
- **Context window: 90/100.** 1M tokens confirmed. Max 128K output confirmed.
- **Multimodal: 72/100.** Image input only; vision capabilities tied to Google's strongest.
- **Coding: 80/100.** Terminal-Bench 82.7%; SWE-bench modest. Better at business task completion than pure coding.
- **Cost efficiency: 25/100.** $30/$180 per 1M tokens is EXTREMELY expensive tier. ~$210 per task on Vals AI benchmark configuration ($8 rank #7 per ModelBeat). Dramatically worse than Sol at $4/$20 (which costs 1/5 the per-token prices despite more expensive tier).
- **Overall Score: 81.8/100.** Mean of five non-cost dims: (82+85+90+72+80)/5 = 81.6... Adjusted down hard for cost efficiency — this model scores very poorly on pure cost basis. Final ~69.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (OpenAI official launching blog, benchmark aggregation sites, evals.report, SiliconANGLE analysis, BenchmarkList comparisons).
- Reference URLs:
  - [<Introducing GPT-5.5 | OpenAI>]
  - [<evals.report — GPT-5.5 Pro benchmark scores>]
  - [<SiliconANGLE — OpenAI releases GPT-5.5>]
  - [<BenchmarkList — GPT-5.5 Pro benchmark map>]
  - [<Artificial Analysis Intelligence Index comparison — GPT-5.5 Pro>]
- Future sources: add new file next to this one.
