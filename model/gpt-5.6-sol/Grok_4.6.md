# GPT-5.6 Sol — findings by Grok 4.6

- Source: OpenAI / GPT-5.6 Sol
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI’s July 2026 GPT-5.6 flagship (Sol/Terra/Luna family): coding-agent and knowledge-work lead with `max`/`ultra` effort and programmatic tool calling. Distinct from cheaper Terra/Luna siblings and from later GPT-6 Astra.
- **Provider / access:** OpenAI API Responses API IDs `gpt-5.6-sol` (ChatGPT Plus/Pro/Business/Enterprise at medium+ effort; Sol Pro on Pro/Enterprise). Codex and ChatGPT Work. Not Chat Completions-first — OpenAI documents Responses API features (programmatic tool calling, multi-agent beta).
- **Release / knowledge:** GA 2026-07-09 after June preview (https://openai.com/index/gpt-5-6/). Knowledge cutoff not stated on that post.
- **IDs:** `openai/gpt-5.6-sol`. No OpenCode Zen Free ID found.
- **Context window:** 1,050,000 tokens; max output 128,000 — OpenAI models page / benchr citing live models docs (https://benchr.org/articles/gpt-5-6-launch).
- **Modalities:** Text and image in (MMMU-Pro published); text + tools out; computer use; browsing. No native image/audio *generation* claimed on the launch tables. Adaptive reasoning effort including `max` and `ultra` (default four parallel agents).
- **Pricing (as of 2026-09-29):** Launch list **$5 in / $30 out** per 1M; cache reads 90% off; cache writes 1.25× uncached input (https://openai.com/index/gpt-5-6/). 2026-08-21 OpenAI said Sol API/credit pricing dropped >20% for three months (promo ~$4/$20 in secondary roundups — treat list $5/$30 as the durable rate). Paid.
- **Architecture:** Proprietary closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** base / **91.9%** Ultra (OpenAI launch table)
- Tau3-Banking (AA): **44.3%** (BenchLM compilation — https://benchlm.ai/models/gpt-5-6-sol)
- τ²-bench: **85.1%** (BenchLM)
- GDPval-AA v2: **1747.8 Elo** (OpenAI)
- BrowseComp: **90.4%** / Ultra **92.2%** (OpenAI)
- OSWorld 2.0: **62.6%** (OpenAI)
- Toolathlon: **58%** (OpenAI)
- AutomationBench: **18.1%** (OpenAI)
- Agents’ Last Exam: **52.7%** table / prose **53.6** on the same post — using **52.7%**
- Claw-Eval: **no verified public score found**
- MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (OpenAI)
- HLE (named on OpenAI academic table): **no verified public score found**; BenchLM lists HLE-Verified **54.5%** and AA-HLE **49.5%**
- FrontierMath T1–3 / T4 (v2): **89% / 83%** (OpenAI)
- Artificial Analysis Intelligence Index v4.1: **58.9** (OpenAI table; AA v4.3.2 later pages may differ)
- ARC-AGI-3: **7.78%** (OpenAI)
- Omniscience Accuracy / Hallucination Rate: BenchLM AA-Omniscience **59.4% accuracy / 92.2% hallucination rate** (tracker)
- CritPt named: **no verified public score found**

Coding:

- SWE-Bench Pro: **64.6%** (OpenAI)
- SWE-bench Verified: **no verified score on the 2026-07-09 launch tables**; benchr cites a later system-card **89.8%** — not used as primary vs official Pro row
- DeepSWE v1.1: **72.7%** (OpenAI)
- Terminal-Bench 2.1: **88.8% / 91.9% Ultra** (also coding-agent)
- AA Coding Agent Index v1.1: **80** (OpenAI)
- AA-SciCode: **57.1%** (BenchLM)
- LiveCodeBench (Vals): **82.6%** (BenchLM)
- CursorBench 4.0: **41.7%** (BenchLM; Anthropic later compared this figure)
- Vibe Code Bench: **no verified public score found**

Long context:

- OpenAI MRCR v2 8-needle 256K–512K: **91.5%**; 512K–1M: **73.8%** (OpenAI). Not ≥98% at 512K+.
- GraphWalks BFS 256k / 1M F1: **90.7% / 77.1%** (OpenAI)

Multimodal:

- MMMU Pro no tools / with tools: **83% / 84.6%** (OpenAI)
- gdp.pdf: **30.7%** (OpenAI)

### Normalized scores (1–100)

- **Tool use: 93/100.** TB 2.1 88.8% (91.9% Ultra) hits the ~88%+ frontier ref; Tau3-Banking 44.3% is near the ~50%+ band; GDPval-AA v2 1748 Elo is on the ~1750 line; BrowseComp 90%+. Caps: OSWorld 62.6%, AutomationBench 18.1%, no Claw-Eval.
- **Reasoning: 94/100.** GPQA Diamond 94.6% and FrontierMath T1–3 89% are frontier; AA Intelligence Index 58.9 is top-of-table vs Gemini 3.1 Pro 46.5 on the same OpenAI sheet. Caps: official post omits HLE; ARC-AGI-3 7.78% is a different (harder) exam than ARC-AGI-2.
- **Context window: 97/100.** ~1.05M maps to 95–100. Not 100: MRCR 512K–1M is 73.8%, not ≥98% retrieval at 512K+.
- **Multimodal: 72/100.** Image in + document/pdf eval (gdp.pdf) sits at the top of the +image / light-PDF band (60–70, stretched by MMMU-Pro 83% and computer-use). Caps: no audio/video-in scores on the launch card; text-only output.
- **Coding: 91/100.** TB 2.1 88.8% and DeepSWE 72.7% match the 74%+/85%+ coding-agent refs; AA Coding Index 80 SOTA on OpenAI’s sheet. Caps: SWE-Bench Pro 64.6% trails Claude Mythos/Fable ~80% on that same table.
- **Cost efficiency: 48/100.** List $5/$30 is between ~$3/$15 (≈60) and $10/$50 (≈30). Temporary >20% Sol discount does not change the durable list-price read. No $0 API tier.
- **Overall Score: 89/100.** Mean of 93, 94, 97, 72, 91 = 89.4 → 89 half-up. Best-fit: default paid flagship for TB2.1/DeepSWE agent coding and 1M-context knowledge work; use Ultra when TB/BrowseComp tails matter; Terra/Luna if Sol’s list price dominates the bill.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-29
- Method: Public internet research (OpenAI GPT-5.6 launch post, BenchLM tracker, secondary pricing notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
