# Claude Sonnet 4 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Claude Sonnet 4
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's May 2025 balanced Claude 4 model — hybrid reasoning (extended thinking up to 64K tokens) with enhanced steerability; launched as the SWE-bench Verified leader at 72.7%. Legacy tier superseded by Sonnet 4.5/4.6/5/5.5 but still served.
- **Provider / access:** Anthropic — API (model id family `claude-sonnet-4-20250522`), AWS Bedrock, Google Vertex AI, Azure AI Foundry; no free tier (meta.json `noFreeId`).
- **Release / knowledge:** 2025-05-22 (Claude 4 launch, alongside Opus 4). Knowledge cutoff not stated in captured sources.
- **IDs:** `anthropic/claude-sonnet-4` (repo meta.json, accurate).
- **Context window:** 200K tokens.
- **Modalities:** Text, image in; text out; extended thinking up to 64K tokens.
- **Pricing (as of 2026-10):** $3 input / $15 output per 1M tokens.

### Raw benchmarks found

Vendor launch blog (anthropic.com/news/claude-4, 2025-05-22; blog reports "the highest scores achieved with or without extended thinking", with the mode noted per result):

Coding / agentic (no extended thinking):

- SWE-bench Verified: **72.7%** — state of the art at launch (Opus 4: 72.5%). Simple scaffold: bash tool + string-replacement file-editing tool only (no planning tool, unlike 3.7 Sonnet); scores out of the full 500 problems (OpenAI models reported on a 477-problem subset).
- Terminal-bench (no ET): vendor value not captured in available text; third-party: **35.5%** (AI War Tracker); Terminal-Bench Hard **31.1%** thinking / **27.3%** default (Artificial Analysis).

Tool use (extended thinking up to 64K tokens; policy prompt addendum; max steps raised 30→100):

- TAU-bench: vendor values not captured; third-party: Airline **60.0%**, Retail **80.5%** (AI War Tracker); τ²-Bench Telecom **64.6%** thinking / **52.3%** default (AA).

Reasoning / knowledge:

- GPQA Diamond (no ET): **70.0%** (Opus 4: 74.9%); with ET / third-party: **75.4%** (AI War Tracker, AI Release Tracker), AA thinking **77.7%** / default **68.3%**, Vals **75.0%** / **69.4%**, HELM **70.6%** / **64.3%**, Epoch **79.2%** (thinking).
- MMMLU (no ET): **85.4%** (Opus 4: 87.4%).
- MMMU (no ET): **72.6%** (Opus 4: 73.7%).
- AIME (no ET): **33.1%** (Opus 4: 33.9%).
- HLE: **7.8%** (Scale AI / CAIS); AA thinking **10.7%** / default **4.3%**.
- The launch blog additionally reports parallel-test-time-compute results (sampling multiple sequences, best selected by an internal scoring model) for SWE-bench Verified, Terminal-bench, GPQA and AIME, citing **79.4% (Opus 4) / 80.2% (Sonnet 4)** — the benchmark label for that pair was not captured in the available text, so it is not attributed to a specific benchmark here.

Other third-party:

- SimpleBench **45.5%**; ARC-AGI-1 **40.0%** / ARC-AGI-2 **5.9%** (thinking); LMArena Hard Elo **1432**, Coding Elo **1450–1473**; Kagi LLM Benchmark **73.0%** thinking / **55.9%** default; BullshitBench v2 **30%**.
- Coding (third-party): SWE-bench Verified bash-only **64.9%**, any-scaffold **76.8%** (#4); SWE-Bench Pro **42.7%** (Scale SEAL, #9); LiveCodeBench **65.5%** (AI War Tracker) / Vals **62.4%** / **59.7%**; Aider Polyglot **61.3%** (#13); SciCode **40.0%**; WeirdML **46.1%**; GSO-Bench **4.9%**; Cybench **35.0%** (#8); APEX-Agents **9.3%** (Mercor).
- Multimodal: MMMU 72.6% (vendor, no ET) is the only captured vision score.

### Normalized scores (1–100)

- **Tool use: 65/100.** TAU-bench Retail 80.5% and τ²-Telecom 64.6% (both with ET) are strong, but Terminal-bench 35.5%, Terminal-Bench Hard 27.3–31.1% and APEX-Agents 9.3% lag the 2026 agentic frontier.
- **Reasoning: 62/100.** GPQA Diamond 70.0% (75.4% with ET) is solid but well below the 90%+ frontier; AIME 33.1% and HLE ≤10.7% are weak by 2026 standards.
- **Context window: 70/100.** 200K tokens — standard for its era; no long-context retrieval figure captured.
- **Multimodal: 65/100.** Text + image input; MMMU 72.6% (no ET) is the only verified vision score; no video/audio input.
- **Coding: 71/100.** SWE-bench Verified 72.7% was launch-day SOTA (any-scaffold 76.8%); LiveCodeBench 65.5%, Aider Polyglot 61.3% and SWE-Bench Pro 42.7% are mid-pack today.
- **Cost efficiency: 60/100.** $3/$15 per 1M — the 2025 frontier price point, now well above 2026 comparables at similar capability.
- **Overall Score: 66.6/100.** Mean of the five quality dimensions. Scores reflect a May 2025 model assessed against the 2026-10 frontier; the folder's peer average (74.5) is higher, likely weighting era-relative performance.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (web search and direct model-card/page fetches); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
