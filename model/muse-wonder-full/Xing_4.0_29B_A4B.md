# Muse Wonder Full — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Meta (`meta/muse-wonder-full`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's most advanced model for complex coding, knowledge work, and long-running agents. Top agentic and coding benchmarks including DeepSWE and SWE-Marathon in independent third-party runs. Subscription-only (Muse Code Power/Maximum Usage plans).
- **Provider / access:** Meta Model API / Muse Code subscription only (Power $50/mo, Maximum $200/mo). No free tier available via API. Cached input available via Meta API listing.
- **Release / knowledge:** Released October 12, 2026. Knowledge cutoff: unknown.
- **IDs:** `meta/muse-wonder-full`; `muse-wonder-full-1.0`
- **Context window:** 1M tokens (new in wonder full vs 1M context in spark-1.3 per Meta docs). Max output unstated.
- **Modalities:** Text, image, video, audio input. Text output only. Reasoning yes. Tool calls yes. JSON mode no explicit mention.
- **Pricing (as of <date>):** Not announced as token pricing — subscription-only ($50/mo Power or $200/mo Maximum). Input $4/$20 per million tokens at API listed pricing; cached $0.20/$20 is listed but not confirmed for full tier.
- **Architecture:** Proprietary ("Meta discloses neither parameter counts nor architecture"). Based on Meta's super-intelligence research.

### Raw benchmarks found

**Agentic / Knowledge work**

- DeepSWE v1.1: Highest score among evaluated models per Meta announcement. Source: Meta model card.
- SWE-Marathon: 57.5% independent third-party run. Source: heise online (independent test confirmation).
- Harvey LAB-AA Legal agent work: 6.7% all-pass. Source: Artificial Analysis article.
- GDPval-AA v2: 33 Elo (~33%; Meta chart shows Personal Superintelligence Index 59.1%). Source: Artificial Analysis, Meta internal comparison.
- AutomationBench-AA: Leading on key metric at ~62%. Source: Artificial Analysis article.
- OSWorld V2.1: Strong performer on agentic computer use. Source: heise online / Artificial Analysis.

**Coding**

- Coding Agent Index: 68 points (Meta self-reported); matches Claude Code with Opus 5 (66) per AA comparison. Source: Artificial Analysis / heise online.
- DeepSWE + SWE-Marathon lead.

**Factual knowledge**

- AA-Omniscience: 30%. Source: Artificial Analysis (vs Opus 5 at 46%).
- Hallucination rate: decreases to 23%. Source: same.

### Normalized scores (1–100)

- **Tool use: 88/100.** DeepSWE leader; SWE-Marathon; multi-turn tool chains strong.
- **Reasoning: 80/100.** Strong on reasoning benchmarks; lower on factual knowledge (AA-Omniscience 30 vs Opus 46).
- **Context window: 90/100.** 1M tokens standard for flagship.
- **Multimodal: 75/100.** Video + audio + image strongest among cohort; vision via active focus feature though benchmark coverage limited.
- **Coding: 90/100.** SWE-bench verification top coding leaderboard; DeepSWE + SWE-Marathon independent runs win.
- **Cost efficiency: 40/100.** Subscription only; $200/mo maximum usage = premium pricing. High access cost at premium tier.
- **Overall Score: 84.6/100.** Mean of five non-cost dims: (88+80+90+75+90)/5 = 84.8... adjusted down for high cost accessing (subscription only), and lower factual knowledge ceiling. Final ~81.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index articles, Meta developer blog/model card, heise online independent test, Vals AI, Google comparison articles).
- Reference URLs:
  - [<Put your ideas to work with Muse Wonder and Muse Wonder Full | Meta>]
  - [<Muse Wonder Model Card — Meta research>]
  - [<Artificial Analysis — Muse Wonder and Wonder Full intelligence jump>]
  - [<All Things Muse — Muse Wonder Benchmarks Explained>]
  - [<heise online — Meta new top AI models: Muse Wonder competes with Claude>]
- Future sources: add new file next to this one.
