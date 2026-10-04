# Grok 4.1 Fast — findings by Qwen 3.8 Flash

- Source: xAI (`grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast (two API variants: `-reasoning` and `-non-reasoning`)
- **Short description:** xAI's purpose-built agentic tool-calling model, launched with the Agent Tools API. Optimized for real-world multi-turn agents (customer support, finance, deep research) with blazing speed and low cost — not a static-reasoning flagship.
- **Provider / access:** xAI API (`grok-4-1-fast-reasoning` / `-non-reasoning`); OpenRouter `x-ai/grok-4.1-fast`; OpenCode Zen `opencode/grok-4.1-fast`. Chat Completions; native server-side tools (web_search, x_search, code_execution, collections_search, MCP).
- **Release / knowledge:** 2025-11-19 (xAI news).
- **IDs:** `x-ai/grok-4-1-fast` · `grok-4-1-fast-reasoning` · `grok-4-1-fast-non-reasoning`
- **Context window:** **2M** tokens (vendor-stated, "consistent performance across its full 2-million-token context"); BenchLM's snapshot lists 1M — primary xAI source used, discrepancy noted.
- **Modalities:** text in/out; image input (Grok 4 family vision; a measured multimodal row exists on BenchLM); reasoning yes (variant); tool calls yes; no native audio/video output. Document retrieval via `collections_search` tool, not native PDF vision.
- **Pricing (as of 2026-10-04):** input **$0.20**/1M, cached input **$0.05**/1M, output **$0.50**/1M; tool calls from **$5 / 1,000** successful invocations. Paid (free-tier only via preview promos).
- **Architecture:** proprietary; RL-trained in simulated multi-domain tool environments; long-horizon RL for multi-turn stability.

### Raw benchmarks found

> Primary numbers from the official xAI launch post (2025-11-19), several independently verified by Artificial Analysis. Breadth caveats from BenchLM (2026-10-02): for this *fast* ID many static lanes read "Coming soon" and its Knowledge lane is estimated-low (#135/171) — the frontier GPQA/SWE numbers in the Grok family belong to the sibling Grok 4.20, not Grok 4.1 Fast. Scores below reflect evidence for this exact ID only.

Agent / tool use:
- τ²-bench Telecom: **100%** (independently verified by Artificial Analysis; SOTA agentic tool use)
- Berkeley Function Calling v4 (BFCL): **72%** overall accuracy (state-of-the-art tool calling)
- FRAMES (deep research): **87.6** · Research-Eval Reka: **63.9** · X Browse: **56.3** (all SOTA, low cost $0.05–0.09/query)
- Terminal-Bench 2.x / GDPval-AA / Claw-Eval: **no verified public score found for this exact ID** (Gert Labs proxy 47.3%)

Reasoning / knowledge:
- GPQA Diamond: **no verified public score found for this ID** (88.5 belongs to Grok 4.20)
- HLE: **no verified public score found**
- FActScore factuality: "on par with Grok 4"; **hallucination rate halved vs Grok 4 Fast** (vendor + AA)
- BenchLM independent public score: **36.69**; Knowledge lane **30.4 (estimated, #135/171)**; Reasoning lane **43.7 (unranked)**

Coding:
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found for this exact ID** (agentic `code_execution` tool exists, but unmeasured as a coder here)

Long context:
- Multi-turn long-context consistency emphasized (2M), but **no MRCR / RULER / GraphWalks retrieval % published** — provisional.

Multimodal / grounded:
- BenchLM Multimodal & Grounded lane: **32.5 (Unranked, 1 rankable row)** — image input supported but not a vision showcase; no video/audio benchmark.

### Normalized scores (1–100)

> Derived per `model-comparison.md` v4. This is a deliberate *specialist*: its tool/agentic evidence is frontier, while static reasoning/knowledge/coding are thinly measured for this exact "fast" ID and scored on what exists, not on sibling-model numbers. Cost excluded from Overall.

- **Tool use: 92/100.** τ²-bench Telecom 100% (AA-verified SOTA) + BFCL-v4 72% + FRAMES 87.6 make it a genuine frontier agentic/tool model; withheld from 95+ only by absent Terminal-Bench/GDPval breadth.
- **Reasoning: 58/100.** No GPQA/HLE published for this ID; BenchLM Reasoning 43.7 and estimated Knowledge 30.4 (#135/171) are the only static signals — mid at best. Its strength is agentic, not static, reasoning.
- **Context window: 95/100.** Documented 2M (≥1M tier); long-horizon-RL consistency is strong but no MRCR/RULER retrieval proof, so the lower edge of the tier.
- **Multimodal: 60/100.** Image input present (a measured multimodal row exists) but weak/limited grounding evidence and no audio/video — bottom of the +image band.
- **Coding: 56/100.** Has a `code_execution` tool and agentic lineage, but zero measured SWE-bench/LiveCodeBench/SciCode for this exact ID → provisional floor.
- **Cost efficiency: 95/100.** $0.20/$0.50 per 1M (cached $0.05) is very cheap for its tier; per-tool-call fees add cost under heavy agent use.
- **Overall Score: 72.2/100.** (92+58+95+60+56)/5 — a best-in-class *agent/tool-calling engine* rather than an all-round reasoner. Best fit: production multi-turn agents, deep-research/search assistants, and cost-sensitive tool-heavy workflows where its 2M window and τ²/BFCL leadership matter more than raw GPQA.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen3.8-flash)** — 2026-10-04
- Method: fresh public web research — official xAI launch post (2025-11-19) for tool/agentic numbers, cross-checked against BenchLM (2026-10-02) lane coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Revisit trigger: publication of GPQA/HLE/SWE-bench for the exact `grok-4-1-fast` ID (currently "Coming soon") would materially change Reasoning and Coding; a disclosed retrieval % at long context would firm Context.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
