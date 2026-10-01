# Qwen 3.5 Plus — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen 3.5 Plus (`opencode/qwen-3.5-plus`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's budget hosted tier of the Qwen 3.5 generation — cheap and serviceable for chat-class workloads, but with only 4 independently verified benchmark rows and weak scores on every one of them.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope API (`qwen3.5-plus`); OpenCode Zen entry (`opencode/qwen-3.5-plus`), standard pricing. Reasoning + tool calls.
- **Release / knowledge:** early 2026 (Qwen 3.5 launch, "Towards Native Multimodal Agents"); knowledge cutoff not disclosed.
- **IDs:** `opencode/qwen-3.5-plus` / `alibaba/qwen3.5-plus`.
- **Context window:** curated meta says 128K total; BenchLM lists 1M — **conflicting**, no retrieval-at-length evidence published either way.
- **Modalities:** text in/out per curated meta (the Qwen 3.5 family markets image/video understanding, but no Plus-variant multimodal rows are verified).
- **Pricing (as of 2026-10-02):** "Standard pricing" — Plus tier historically among the cheapest hosted APIs; exact verified rate not found.
- **Architecture:** proprietary hosted tier of the Qwen 3.5 line.

### Raw benchmarks found

> Independently verified against BenchLM (only **4 of 618** rows; 49.44/100, #97 of 645), citing the JobBench paper, Vals AI and Epoch AI (fetched 2026-10-02). The vendor launch blog (qwen.ai) renders no fetchable score tables, and llm-stats returned no data for this variant — coverage is genuinely thin.

Agent / tool use:

- JobBench: **18.5%** (paper) — the only agentic row published for this variant

Reasoning / mathematics:

- FrontierMath v2 (Epoch AI): **21.0%** Tiers 1–3, **2.1%** Tier 4 — well below frontier

Coding:

- Vibe Code Bench (Vals): **15.74%** — weak repo/agent code

Multimodal / long context:

- No verified multimodal or long-context retrieval rows published.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 50/100.** JobBench 18.5% is the sole verified agency row and is weak; no Terminal-Bench, GDPval or τ² rows exist to lift it — provisional until coverage improves.
- **Reasoning: 55/100.** FrontierMath v2 21.0% (Tier-4 2.1%) shows a real but sub-frontier math tier; no GPQA/HLE/ARC rows published, so the score rests on one benchmark family.
- **Context window: 60/100.** Conflicting specs: curated meta 128K vs BenchLM 1M, with zero retrieval-at-length evidence; scored near the top of the 100K–200K band (50–64) pending a confirmed window — if 1M is real and used, this dim could jump to 95+.
- **Multimodal: 15/100.** Text in/out per the curated entry with no verified image/audio/video rows for this variant — text-only band (10–20), despite the family's native-multimodal marketing.
- **Coding: 40/100.** Vibe Code Bench 15.74% is below mid-tier; no SWE-bench, LiveCodeBench or Coding Index rows for the Plus variant to counterbalance it.
- **Cost efficiency: 80/100.** Plus-tier hosted pricing is historically among the cheapest paid APIs (well under the $3/$15 anchor) — provisional, exact rate unverified; no free tier confirmed. Cost is excluded from Overall.
- **Overall Score: 44/100.** Mean of Tool 50, Reasoning 55, Context 60, Multimodal 15, Coding 40 = 44.0 → 44. Best fit: low-budget high-volume chat/extraction where cheap tokens outweigh capability; for any agentic, coding or reasoning workload choose Qwen 3.7/3.8 Plus/Max or a Zen-free Flash-tier model instead — treat all scores as provisional given only 4 verified benchmarks.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows via JobBench paper, Vals AI and Epoch AI; vendor blog and llm-stats checked but yielded no fetchable data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
