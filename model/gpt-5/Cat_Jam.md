# GPT-5 — findings by Cat Jam

- Source: OpenAI / GPT-5 (`opencode/gpt-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI unified system (released 2025-08-07): router selects fast vs deeper reasoning; strong coding/math/multimodal/health/factuality improvements vs o3/GPT-4o. Superseded by GPT-5.x/6 family.
- **Provider / access:** OpenAI API (`gpt-5`, fast/chat + thinking model as `o` aliases), ChatGPT for all users. Chat Completions + Responses. Text/image in; text out.
- **Release / knowledge:** Released 2025-08-07; knowledge cutoff Sep 30, 2024 (per `gpt-5` docs/announcement).
- **IDs:** `gpt-5` (OpenAI)
- **Context window:** 400,000 tokens; max output 128,000. No long-context tiering in fetched docs? 400K native.
- **Modalities:** Text, image in; text out. Tools: web search, code interpreter, file search, image gen, hosted shell, apply patch, skills, MCP; reasoning modes none/minimal/low/medium/high.
- **Pricing (as of 2026-10-16):** $1.25 / $10 per 1M input/output; cached $0.125; Batch 50%.
- **Architecture:** unified router; GPT-5-main + thinking mini; not open.

### Raw benchmarks found (OpenAI launch systematic comparisons, Aug 2025)

Agent / tool use:

- τ²-bench Telecom: **96.7%** (tool calling, GPT-5)
- Scale MultiChallenge (IF): 69.6%
- Internal API instruction following (hard): 64.0%
- COLLIE: 99.0% (high)
- OpenAI-MRCR 2-needle (128K): 95.2%
- BrowseComp Long Context 128K/256K: 90.0% / 88.8%
- TAU2 Bench telecom airline/retail for citation? Tau-2 airline 62.6% / retail 81.1% (GPT-5 high)
- Agent Tool: strong (Anthropic not needed).

Reasoning / knowledge:

- AIME 2025 (no tools): 94.6%
- GPQA Diamond (no tools): 85.7%
- HLE (no tools): 24.8%
- FrontierMath Tier 1-3 (python): 26.3%; Tier 4 35.8? (not in this snippet? no separate)
- HMMT 2025 (no tools): 93.3%
- HealthBench Hard: 46.2%
- MMMU: 84.2%; MMMU Pro: 78.4%
- CharXiv reasoning (python): 81.1%
- VideoMMMU (max 256 frame): 84.6%
- ERQA: 65.7%
- LongFact (Concepts/Objects hallucination): ~1.0%/1.2%; FActScore 2.8%
- SimpleQA accuracy 0.55; halluc rate 0.40

Coding:

- SWE-bench Verified: **74.9%** (GPT-5 high)
- Aider Polyglot: **88.0%**
- FrontierCode? not in 5-era (later benchmark)
- Long context tool use: OpenAI MRCR retrieval strong

Long context:

- 400K context. OpenAI-MRCR 2-needle 128K 95.2, 256K 86.8; Graphwalks BFS/parents good. 128K–256K BrowseComp 88.8–90.

### Normalized scores (1–100)

- **Tool use: 88/100.** Tau2 telecom 96.7, SWE-Verified 74.9, IF 69.6, COLLIE 99.0; strong tool loop.
- **Reasoning: 88/100.** AIME 94.6, GPQA 85.7, HLE 24.8 (relatively low; only no tools; AA index era), MRCR 86.8 at 256K; robust reasoning.
- **Context window: 86/100.** 400K with OpenAI-MRCR 95.2 (128K) and 86.8 (256K); cap (full 400K unclear).
- **Multimodal: 84/100.** MMMU 84.2, VideoMMMU 84.6, ERQA 65.7, CharXiv python 81.1; text-image only but strong reasoning.
- **Coding: 88/100.** SWE-Verified 74.9, Aider Polyglot 88, Tau2 telecom 96.7; strong interactive coding.
- **Cost efficiency: 84/100.** $1.25/$10 with cache Batch 1/2? Batch 50%; cache $0.125. Strong.
- **Overall Score: 86.8/100.** Mean (88+88+86+84+88)/5 = 86.8. Important historical OpenAI unified model; superseded by later 5.5/5.6/Astra/6.x.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (OpenAI official system card and launch post values; official published); scores are normalized 1–100 interpretations. Date/knowledge cutoff from docs.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using same headings.
