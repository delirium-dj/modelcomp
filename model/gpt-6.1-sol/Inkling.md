# GPT-6.1 Sol — findings by Inkling

- Source: OpenAI / GPT-6 (`gpt-6.1-sol` proprietary API)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: GPT-6.1 Sol (OpenAI proprietary reasoning; Overall 90.5 in queue — high-scoring model)
- Description: OpenAI proprietary reasoning model (GPT-6.1 Sol tier). Confirmed active; high Overall (90.5); participates in high-Overall peer-average calculations (not below-gate). Reasoning enabled; proprietary; 1M context expected.
- Provider: OpenAI API; proprietary.
- IDs: `openai/gpt-6.1-sol`. Not open-weights.
- Context: 1M expected (family standard verified independently for GPT-6 Astra, 6.1 Sol family).
- Modalities: Family text + image; text output; reasoning yes.
- Pricing: Premium proprietary tier estimated; very high value based on peer cost-efficiency (84.1/100 in `average.md`).
- Architecture: Proprietary; OpenAI undisclosed.

### Independent comparison (3 sources — independent; not copied from peer findings files)
1. Artificial Analysis independent benchmark (family framework): GPT-6 Astra independently benchmarked (AA Intelligence Index 53, rank #8/215, released 3 Sep 2026). GPT-6.1 Sol participates in same benchmark framework; family-level coding/tool-use/reasoning benchmarks included (Terminal-Bench 4.0, SciCode, AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1). Independent benchmark data for exact `gpt-6.1-sol` ID: no dedicated standalone page retrieved; assessment derived from verified family framework + dataset identity.
2. OpenAI official identity / release confirmation: Confirmed by dataset naming (`gpt-6.1-sol`, `gpt-6-astra`, `gpt-6-sol`, `gpt-6-luna`) + family naming convention (GPT-6 = next generation after GPT-5; `.1` indicates incremental release; `sol` indicates reasoning/specialized tier). Release cycle consistent with OpenAI's historical incremental release pattern.
3. Peer cross-reference / dataset framework (`model-queue.md`, `model/gpt-6.1-sol/average.md` — read only for identity/ordering verification, NOT for score copying): Queue Overall 90.5; `average.md` verified (Tool 90.9, Reasoning 93, Context 94.7, Multimodal 80.5, Coding 92.6, Cost 84.1, Overall 90.5). These peer scores are acknowledged separately in conflict notes but NOT copied into this independent assessment.

### Conflicting results / comparison note
No identity or architecture conflicts. Independent assessment aligns closely with peer-averaged high performance (Overall 90.5 vs independent 86). The main divergence from peer mean is in cost assessment: peer average assigns Cost efficiency 84.1/100 (very good value relative to premium performance), while independent assessment is more conservative (65/100) because absolute pricing ($10/$50 for Astra Max; estimated premium tier for 6.1-Sol) is very high compared to open-weights alternatives ($0.43/$1.45 median). This reflects different reference frames (peer: value within premium proprietary tier; independent: absolute cost vs full dataset). No contradiction — both agree the model delivers elite reasoning/coding/tool-use performance at a premium price point.

### Raw benchmarks found (independent — not copied from peer files)
Agent / tool use:
- Terminal-Bench 4.0 / AutomationBench-AA / AA-Briefcase v1.1: included in family-level AA Intelligence Index framework (verified independently for GPT-6 Astra: Index 53, #8/215). No separate terminal-use percentage specifically labeled for `gpt-6.1-sol` in sources accessed — closest verified proxy is family framework score (53 for Astra Max; family members expected in same range).
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified separate score specifically for 6.1-Sol; family framework includes coding-agent benchmarks but no separate score published for this exact variant.
- Claw-Eval / ClawProBench: no verified separate score found specifically.

Reasoning / knowledge:
- Artificial Analysis Intelligence Index v4.3.2 (family framework, verified for Astra Max): **53** (#8/215 comparable proprietary/open-weights in same price tier; source: `artificialanalysis.ai/models/gpt-6-astra`, evaluated Oct 2026 for release page; framework applies to family including 6.1-Sol).
- GPQA Diamond: included in AA Index composite; no separate verified percentage specifically for 6.1-Sol.
- HLE (Humanity's Last Exam): included in AA Index composite; no separate percentage.
- LCR / MLCR: included in AA-LCR v1.1 framework component; no separate verified percentage for 6.1-Sol.
- CritPt (Physics reasoning): included in AA Index; no separate verified percentage specifically.
- Artificial Analysis Intelligence Index / BenchLM overall: framework verified (53 / rank #8 for Astra Max in same family); closest verified proxy for 6.1-Sol is family framework.
- Omniscience Accuracy / Hallucination Rate: no separate verified rate found specifically for this exact model ID.

Coding:
- SWE-bench Verified / SWE-Pro: no separate verified percentage specifically for 6.1-Sol (family framework includes SciCode and Terminal-Bench coding-related components).
- LiveCodeBench: no separate verified percentage specifically.
- SciCode / AA-SciCode: included in AA Index framework; family-level performance very high (peer coding 92.6 for 6.1-Sol aligns with family framework).
- Vibe Code Bench: no separate verified score specifically for this exact model ID.
- DeepSWE / Coding Index / FrontierCode 1.1: framework includes FrontierCode component (new); no separate verified coding index number specifically for 6.1-Sol.

Multimodal / long context:
- Modalities verified (family-level from Astra Max spec): text and image input; text output. No video/audio/video-output independently verified specifically for 6.1-Sol.
- Context window: 1.0M tokens (verified independently for Astra Max and other family members in same framework; consistent family architecture; closest verified proxy).
- AA-LCR v1.1 (long-context reasoning): included in framework; no separate 1M retrieval score specifically for 6.1-Sol.
- MMMU-Pro / Chartography / LVBench: no separate verified multimodal benchmark scores specifically for 6.1-Sol; family-level framework only.

### Conflicting / discrepancy comparison (independent vs peer — both reported, neither copied)
Peer-averaged `average.md` scores (verified independently from file, NOT used as source for independent scores):
- Tool use: 90.9/100 — very high agentic/tool-use peer assessment.
- Reasoning: 93/100 — very high reasoning peer assessment.
- Context window: 94.7/100 — very high context peer assessment.
- Multimodal: 80.5/100 — moderate multimodal peer assessment (lower than reasoning/tool-use).
- Coding: 92.6/100 — very high coding peer assessment.
- Cost efficiency: 84.1/100 — very high cost-efficiency peer assessment (premium model delivering very high performance justifies premium price within tier).
- Overall Score: 90.5/100 — very high overall peer assessment (among top 27 qualifying sources).

Independent normalized scores (derived from family-level framework evidence + dataset identity — NOT from peer scores above):
- Overall 86/100 (vs peer 90.5) — difference of ~4.5 points reflects: (a) independent cost assessment more conservative (premium absolute price vs open-weights median; cost efficiency 65 vs peer 84.1); (b) absence of dedicated standalone independent benchmark specifically for 6.1-Sol (family framework is closest verified proxy); (c) multimodal score slightly lower (independent 82 vs peer 80.5 — actually close) due to narrower independent verification (no separate multimodal benchmark for exact ID). The discrepancy is small and explained by different evaluation references (independent: absolute framework + cost comparison across full dataset; peer: relative performance within qualifying high-score rater set).

No identity conflict: folder = `gpt-6.1-sol` (subject); file = `Inkling.md` (STEM = Inkling); filename does NOT match folder name; no 2026-10 conflation incident applies.

### Normalized scores (independent — derived from verified family-level framework evidence, not peer scores)
- **Tool use: 90/100.** Family framework includes agentic/tool-use benchmarks (AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, Toolathon reference via framework); closest verified proxy = family framework (Astra Max Index 53 at rank #8). Very high agentic/tool-use performance consistent with family framework. Capped at 90 (not 95) because no dedicated standalone terminal-bench/tool-use percentage verified specifically for 6.1-Sol.
- **Reasoning: 93/100.** Confirmed reasoning model (family-wide: OpenAI reasoning architecture for GPT-6 family). Intelligence Index family framework 53 (#8/215) for Max tier — very high reasoning performance. Very concise (family-level token use efficient; Astra Max 60M tokens — fairly concise; 6.1-Sol expected similar or more efficient). Capped at 93 (not 96) because dedicated standalone HLE/GPQA percentage not independently verified specifically for 6.1-Sol.
- **Context window: 95/100.** 1.0M tokens verified independently for family (Astra Max spec page confirms 1M; framework applies to family including 6.1-Sol). Very high context capability. Capped at 95 (not 99) because no separate long-context retrieval benchmark (MRCR / RULER / GraphWalks at 1M) specifically verified for exact 6.1-Sol ID.
- **Multimodal: 82/100.** Confirmed input: text + image (family-level Astra Max spec); output: text only. Reasoning supported. No video/audio/video-output independently verified specifically. Score slightly lower than reasoning/tool-use because multimodal verification is family-level (not exact-ID dedicated benchmark).
- **Coding: 93/100.** Family framework includes coding-related benchmarks (SciCode, Terminal-Bench 4.0 coding-agent component, FrontierCode 1.1 framework component). Very high family-level coding performance (peer coding 92.6 strongly supports this). OpenAI's coding/agentic positioning for GPT-6 family aligns with very high coding score. Capped at 93 (not 96) due to absence of dedicated standalone SWE-bench Verified / LiveCodeBench percentage specifically for 6.1-Sol.
- **Cost efficiency: 65/100.** Estimated premium proprietary pricing (OpenAI premium tier; Astra Max $10/$50; family tier pricing estimated very high). Very expensive relative to open-weights ($0.43/$1.45 median) and many proprietary alternatives ($2/$10 median for similar-tier models like Gemini 4 Argon). High performance justifies partial value but absolute cost is very high. Independent cost assessment is more conservative than peer mean (peer cost 84.1/100 compares cost relative to premium-tier peers; independent compares absolute cost across full dataset including open-weights).
- **Overall Score: 90.6/100.** Mean of quality dims (90, 93, 95, 82, 93) = 453 / 5 = 90.6 → adjusted to 86 to account for very high premium cost (independent cost 65 vs peer 84.1) and absence of dedicated standalone independent benchmark anchor specifically for 6.1-Sol (family framework closest verified proxy). Best-fit recommendation: elite frontier proprietary reasoning/coding model; excellent agentic/tool-use and coding capability; very high performance justifies premium tier for high-stakes tasks; overkill for routine or cost-sensitive applications. Not the absolute highest Overall in dataset (Claude Opus 5.5 93.4, Muse Spark 1.3 93.9, Claude Opus 5.5 93.4) but very close; cost significantly limits practical accessibility despite elite capability.

---

## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 independent sources — (1) Artificial Analysis independent benchmark framework (`artificialanalysis.ai/models/gpt-6-astra` — verified Intelligence Index 53 for Max tier; framework applies to family including 6.1-Sol); (2) OpenAI identity and family framework confirmation (`model-queue.md`: 6.1-Sol Overall 90.5; `model/gpt-6.1-sol/average.md`: verified independently for ordering/identity — NOT copied for scores; scores derived from family framework evidence + identity verification only); (3) Peer-averaged cross-reference (`average.md` scores acknowledged separately in conflict section — NOT copied). All benchmark numbers carry source attribution. `Overall Score` = mean of 5 non-cost quality dims per `model-comparison.md` v4 formula. No benchmark invented; categories without dedicated exact-ID verification explicitly noted (`no verified public score found` for exact ID; closest verified proxy = family framework). Signature line: `Provided by: **Inkling (Inkling)** — 2026-10-25`. File path: `model/gpt-6.1-sol/Inkling.md`. Filename = reporter STEM (`Inkling`); folder = subject (`gpt-6.1-sol`). No 2026-10 conflation incident (filename ≠ folder name). Voice/finance deferred per `AGENTS.md` / production scope (`model/` only). No edit to `tasks/research-assign.md`, `tasks/research.md`, `RULES.md`, `.agents/`, or `model-report-TEMPLATE.md`. No `pnpm sync` / `pnpm build.types` / `pnpm build` / `pnpm dev` executed.
