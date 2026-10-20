# ox_alpha — findings by Nemotron 3 Ultra 550B A55B

- Source: Ox Alpha (`ox_alpha`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (frontier reasoning model)
- **Short description:** Production reasoning-first model with 1M context (1,048,576 tokens), 131K max output, native text/image/video input, free chat at oxalpha.com. Claims 80% solve rate on 10 real-world coding tasks, beating Fable 5 (65%), GLM-5.3 (62%), GPT-5.6-sol (52%), Grok 4.6 (62%).
- **Provider / access:** oxalpha.com (free chat, no login), oxalpha.com/chat. No public API keys, no inference providers listed (Novita, Together, Fireworks, etc. not deployed). OpenCode Zen not listed.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated.
- **IDs:** `ox_alpha` (oxalpha.com chat interface). No public API identifiers.
- **Context window:** 1,048,576 tokens (1M) input; 131,072 max output tokens.
- **Modalities:** Text, image, video in; text out; reasoning yes (visible thinking stream); tool calls yes (native `tools`/`tool_choice`); JSON mode/schema yes (`response_format`).
- **Pricing (as of 2026-10-20):** Free chat at oxalpha.com (no sign-up, no subscription, chats not stored on their servers). No public API pricing. Upstream model API processes messages.
- **Architecture:** Proprietary reasoning model; parameter count not disclosed. Claims "reasoning-first" with multi-step logic, visible thinking, production-grade output.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**Official website benchmarks** (oxalpha.com/#benchmarks, "independent community benchmark", third-party data, small sample — directional not definitive):

Coding (10 real-world tasks, pass/fail per task, reference models: passes out of 4 attempts):

| Task | Fable 5 [max] | GLM-5.3 [max] | GPT-5.6 Sol [max] | Grok 4.6 [xhigh] | Ox Alpha |
|------|---------------|---------------|-------------------|------------------|----------|
| anko-typed-variable-bindings | 4/4 | 4/4 | 2/4 | 1/4 | ✓ |
| arktype-json-schema-refs | 2/4 | 1/4 | 3/4 | 1/4 | ✓ |
| fastapi-deprecation-headers | 4/4 | 3/4 | 3/4 | 4/4 | ✓ |
| helm-unified-manifest-stream | 4/4 | 4/4 | 4/4 | 4/4 | ✓ |
| igel-persist-feature-schema | 3/4 | 3/4 | 0/4 | 4/4 | ✓ |
| katex-multicolumn-array-spans | 2/4 | 4/4 | 3/4 | 4/4 | ✓ |
| meriyah-explicit-resource-decl | 1/4 | 0/4 | 0/4 | 0/4 | ✓ |
| query-persist-restored-state | 2/4 | 3/4 | 1/4 | 2/4 | ✓ |
| scc-bounded-memory-spilling | 4/4 | 3/4 | 4/4 | 4/4 | ✕ |
| vulture-persistent-analysis-cache | 0/4 | 0/4 | 1/4 | 1/4 | ✕ |
| **Mean** | **65%** | **62%** | **52%** | **62%** | **80%** |

- **Overall coding solve rate: 80%** (8/10 tasks solved, pass/fail single attempt vs 4 attempts for references)
- **Highlighted:** Ox Alpha solved 2 tasks where every reference model scored ≤1/4 (meriyah, query-persist)

**No benchmarks found on major aggregators** (BenchLM, Artificial Analysis, Vals AI, Epoch AI, ARC Prize, Nous Research, OpenRouter, Hugging Face eval results). The benchmarks above are self-published on oxalpha.com with "independent community benchmark" disclaimer.

**Hugging Face note:** A different model exists at `brokenshards/ox-alpha` (1-bit ternary compressed, 800B logical params, community upload) — **not the same model** as oxalpha.com production model.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 70/100.** Claims "native tool calling" and "sustained agentic work"; 1M context enables long-horizon tasks. Capped by no public TB, BrowseComp, OSWorld, GDPval, MCP Atlas, τ²-bench — only self-published coding tasks.
- **Reasoning: 78/100.** "Reasoning-first" with visible thinking; 80% coding solve rate implies strong multi-step logic; beats Fable 5/GLM-5.3/GPT-5.6/Grok 4.6 on coding. Capped by no public GPQA, HLE, FrontierMath, ARC, CritPt, AA Intelligence Index — only coding proxy.
- **Context window: 95/100.** 1,048,576 native context (1M); 131K max output. Methodology: ≥1M = 95-100.
- **Multimodal: 85/100.** Native text/image/video input (3 modalities); "sees what you see" with screenshots/diagrams/UI. No audio, PDF noted. Methodology: +video in = 75-85.
- **Coding: 82/100.** 80% on 10 real-world tasks (pass/fail single attempt) beating all 4 frontier references (65%/62%/52%/62% on 4 attempts). Small sample (10 tasks), self-published, directional. Capped by no SWE-bench, LiveCodeBench, HumanEval, AA Coding Index.
- **Cost efficiency: 80/100.** Free chat at oxalpha.com (no login, no subscription); no public API pricing. Upstream API costs unknown. Capped by no public API access for integration.
- **Overall Score: 82/100.** Half-up mean of (70 + 78 + 95 + 85 + 82) / 5 = 82 → 82. Using six incl. cost: (70+78+95+85+82+80)/6 = 490/6 = 81.7 → 82. Model-queue says 87; **gap reduced to 5 points** (queue may weight differently or have additional private eval). Best-fit: strong frontier reasoning model with exceptional 1M context and coding; free web access; needs public benchmark replication.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: 5+ independent web searches: (1) oxalpha.com official website (model card, capabilities, benchmarks, FAQ), (2) oxalpha.com/#benchmarks (10-task coding benchmark with 4 reference models), (3) oxalpha.com/chat (free interface), (4) BenchLM search for ox-alpha (404), (5) Artificial Analysis search for ox-alpha (404), (6) Hugging Face search (found unrelated community model `brokenshards/ox-alpha`), (7) Inference provider check (none deployed). Compared self-published coding benchmark vs absent public aggregator data — directional only.
- Future sources: add a new file next to this one, e.g. `OX.md`, using the same headings.