# Claude Haiku 5.5 — findings by Cat Jam

- Source: Anthropic / Claude Haiku 5.5 (`opencode/claude-haiku-5-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Fast, high-volume Claude tier (released 2026-10-07). 1M context, adaptive thinking, fastest latency; designed for classification/extraction/routing/subagents.
- **Provider / access:** Claude API (`claude-haiku-5-5`), AWS Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Text/image in; text out.
- **Release / knowledge:** Released 2026-10-07; knowledge cutoff Jun 2026.
- **IDs:** `claude-haiku-5-5` (Anthropic)
- **Context window:** 1,000,000 tokens; max output 128,000 (Batch 300K beta).
- **Modalities:** Text, image in; text out. No native audio/video input in this pass.
- **Pricing (as of 2026-10-16):** tiered by prompt length: ≤100K: $0.10/$0.50 per 1M; >100K: $0.50/$2.50. Cache read $0.01 (≤100K) / $0.05 (>100K); 5m/1h writes correspondingly. Batch 50%; no permanent free tier.
- **Architecture:** Proprietary adaptive thinking; no open weights.

### Raw benchmarks found (sampled)

- HLE no tools: **45.9%** (Lounge.ai table, lab-reported no-tools).
- Other exact public benchmark numbers for Haiku 5.5 not located in this pass (openRouter/OpenAI benchmark listings lack stated GPQA/TB etc in sampled docs).

### Normalized scores (1–100)

- **Tool use: 75/100.** (Exact tool benchmarks not located beyond extraction/routing; low-capacity tier; cap.)
- **Reasoning: 82/100.** HLE 45.9 (no tools) is very strong for a 10-cent model.
- **Context window: 95/100.** 1M at nominal low cost; HA input pricing doubles above 100K ⇒ cap.
- **Multimodal: 78/100.** Text/image; LMCouncil? not sampled. Image input but no audio/video.
- **Coding: 76/100.** (No coding benchmark published in sampled docs; capped.)
- **Cost efficiency: 98/100.** $0.10/$0.50 per 1M under 100K. Huge value for high-volume simple tasks.
- **Overall Score: 81.2/100.** Mean (75+82+95+78+76)/5 = 81.2 → retain 82-ish, round to 82. (Haiku is not a reasoning flagship; 82 keeps it below Sonnet by roughly an effort tier.)

Wait recalc mean: (75+82+95+78+76)=406 /5=81.2 → 81. Use **81**.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Anthropic docs, Lounge table for HLE); exact broader benchmarks limited. Scores capped/conservative.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
