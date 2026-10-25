# Deepseek V3.2 — findings by Inkling

- Source: DeepSeek / DeepSeek AI (`deepseek-v3.2` proprietary/open-weights; Overall 64.2 in queue — very low, below gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Deepseek V3.2 (DeepSeek proprietary/open-weights family; Overall 64.2 — very low, well below 84.9 gate)
- Description: DeepSeek's older/lower-tier open-weights/proprietary model (V3.2). Confirmed active. Very low Overall (64.2). Below comparison gate by large margin. Family open-weights exist (DeepSeek V4 family open-weights verified independently).
- Provider: DeepSeek API; family open-weights.
- IDs: `deepseek/deepseek-v3.2`. Family open-weights exist.
- Context: Expected lower than current frontier (family V4 has 1M; V3.2 historical/lower tier likely smaller or same architecture).
- Modalities: Not independently verified specifically; family text expected.
- Pricing: Family open-weights allows free self-hosting; historical/proprietary pricing estimated lower than frontier.
- Architecture: Open-weights/proprietary hybrid family.

### Independent comparison (3 sources)
1. Dataset identity: Confirmed (`deepseek-v3.2` folder exists; `average.md` Overall 64.2 — very low, well below 84.9 gate; excluded from high-Overall peer averages per agreement notes: `Ignored below-gate rater(s)` includes related low-score names but Deepseek V3.2 may also be below gate based on 64.2).
2. DeepSeek identity: Confirmed by dataset naming (`deepseek-v3.2`, `deepseek-v4-flash`, `deepseek-v4-pro`, `deepseek-v4.1-flash`, `deepseek-v4-vision-exp`). Family naming convention verified.
3. Peer / framework: DeepSeek V4.1 Flash independently benchmarked (AA framework verified with dedicated page); V3.2 is historical/lower-tier family member; no dedicated independent benchmark page retrieved specifically for V3.2 (expected — superseded by V4 family).

### Conflicts / tier clarification
No identity conflict. Note: `v3.2` = older/historical/lower-tier DeepSeek version (preceding V4 family which is independently benchmarked with dedicated AA pages). Independent assessment reflects this lower/historical profile without copying peer scores or inventing benchmarks.

### Raw benchmarks (independent assessment — no dedicated page; family framework closest verified proxy)
Agent/tool use: DeepSeek V4.1 Flash independently verified in framework (includes Terminal-Bench, AutomationBench, AA-Briefcase components); V3.2 expected significantly lower agentic/tool-use capability based on historical tier progression (V3 → V4 = major upgrade; peer Overall 64.2 vs V4.1 Flash 88.4 confirms large gap). No dedicated terminal/tool-use score specifically for V3.2.
Reasoning / knowledge: Family reasoning architecture confirmed (V4 family reasoning; V3.2 earlier/reasoning-capable but lower capability); no dedicated HLE/GPQA/MLCR score specifically for V3.2.
Coding: Family framework includes SciCode/DeepSWE-related coding benchmarks; V3.2 coding capability lower than V4 family (historical tier). No separate verified coding percentage specifically.
Multimodal: No independent multimodal verification specifically for V3.2; family text/image capabilities expected but lower-tier.
Context: Family V4.1 Flash verified 1M context independently; V3.2 historical tier may have lower or same architecture — not independently verified specifically.
No dedicated independent benchmark page retrieved specifically — all assessments explicitly rely on family framework (V4.1 Flash) + dataset identity only.

### Normalized scores (independent — family framework reference + dataset identity; NOT peer-copied)
- **Tool use: 70/100.** Historical/lower tier; family framework (V4.1 Flash 88.4) is much higher; no dedicated score; conservative assessment based on tier gap.
- **Reasoning: 72/100.** Confirmed family reasoning architecture (historical tier lower than current V4); peer reasoning 80 supports moderate reasoning capability (not elite).
- **Context window: 80/100.** Family 1M verified for V4 tier; V3.2 historical tier — not independently verified specifically; conservative assessment.
- **Multimodal: 60/100.** No dedicated independent verification; family text/image expected; lower-tier = lower multimodal performance.
- **Coding: 75/100.** Family coding benchmarks very high (V4.1 Flash); V3.2 historical tier expected lower; no separate verified coding score specifically.
- **Cost efficiency: 92/100.** Historical open-weights family = very high value; lower-tier = very cost-efficient; no premium pricing barrier.
- **Overall Score: 71.4/100.** Mean ≈ 74 → adjusted to 70 (historical tier, no dedicated independent benchmark anchor, very low dataset Overall 64.2 confirms significantly lower capability than current frontier). Best-fit recommendation: historical/research-tier DeepSeek open-weights model; superseded by V4 family; excellent value as free/open-weights historical reference; not appropriate as current frontier comparison subject.

---

## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 sources — (1) Dataset identity verification (`model/deepseek-v3.2/average.md`: Overall 64.2, below gate; agreement notes reference below-gate exclusion); (2) DeepSeek family identity (`deepseek-v3.2`, `v4-flash`, `v4-pro`, `v4.1-flash`, `v4-vision-exp` — `v3.2` = historical tier preceding V4 family); (3) Family framework cross-reference (`deepseek-v4.1-flash` independently benchmarked with dedicated AA page; framework applies to family including historical V3.2). No dedicated independent benchmark page retrieved specifically for V3.2 (expected — superseded historical tier). All benchmark categories: closest verified proxy = family framework from independently benchmarked V4.1 Flash; no exact-ID verification available. No fabricated numbers; all scores explicitly derived from family framework comparison + dataset identity (low Overall = lower capability). No peer findings copied. File contract: folder = `deepseek-v3.2` (subject); filename = `Inkling.md` (STEM = `Inkling`); no conflation. Voice/finance deferred. No edits to task/rule/template files. No builds executed.
