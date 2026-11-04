# Grok 4.1 Fast Reasoning — findings by Qwen 3.8 Flash

- Source: xAI (`xai/grok-4-1-fast-reasoning`; curated id `opencode/grok-4.1-fast-reasoning`), cross-checked against xAI's Grok 4.1 Fast launch post, Artificial Analysis (τ²-bench), OpenRouter and the Agent-Tools-API benchmark table
- Date: 2026-10-20 (UTC); second pass 2026-11-04 (UTC) — **lifecycle: origin-retired, legacy flag** (xAI API shut down May 15, 2026; Google Vertex Aug 20, 2026; Azure floor 2027-05-19; requests redirected to Grok 4.3) · **Multimodal band correction**: AA independent listing confirms text+image input (pass-1 said text-only from xAI’s tool-calling launch framing); no published vision benchmark scores → floor of text+image band · **Overall 63.4→72**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast (Reasoning)
- **Short description:** The "maximal-intelligence" endpoint of xAI's **Grok 4.1 Fast** — a purpose-built, low-cost **tool-calling / agentic-search** model (2025-11-19) rather than a deep-reasoning flagship. xAI ships two variants off one model: `grok-4-1-fast-reasoning` (this entry) and `grok-4-1-fast-non-reasoning` (instant). Its signature strength is state-of-the-art agentic tool use with a 2M-token window; its weakness is that it is explicitly *not* the top "brain" of the Grok line.
- **Provider / access:** xAI API (`model="grok-4-1-fast-reasoning"`) + OpenRouter (`x-ai/grok-4-1-fast`); paired with xAI's **Agent Tools API** (web search, X search, code execution, file search, remote MCP) running on xAI infra.
- **Release / knowledge:** 2025-11-19; knowledge cutoff not separately published. Curated meta flags it **deprecated/superseded** — the Grok 4.20 / 4.5+ line now serves the same agentic niche with better judgment.
- **IDs:** `grok-4-1-fast-reasoning`; sibling endpoints `grok-4-1-fast-non-reasoning`, `grok-4-fast-reasoning` (the earlier 4.0 Fast lane).
- **Context window:** **2,000,000 tokens**, trained (long-horizon RL, multi-turn emphasis) to stay consistent across the full window.
- **Modalities:** **text-only** in / text out (no image/audio on the Fast lane); reasoning yes (this variant); parallel tool calls yes.
- **Pricing (as of 2026-10-20):** **$0.20/M input, $0.50/M output, $0.05/M cached**, tool calls from $5/1,000 successful invocations — one of the cheapest agentic tiers.
- **Architecture:** proprietary; RL-trained in simulated multi-domain tool environments; a distilled "Fast" sibling of Grok 4 with roughly halved hallucination vs Grok 4 Fast.

### Raw benchmarks found

> A strong mix of xAI-reported and **Artificial-Analysis-independent** numbers. The τ²-bench Telecom result is explicitly "verified by Artificial Analysis." No SWE-bench/GPQA absolutes are published for this tool-calling-focused endpoint.

Agent / tool use:

- **τ²-bench Telecom: 100%** — *independent evaluation verified by Artificial Analysis* (agentic customer-support tool use; total cost $105)
- **Berkeley Function Calling v4: 72%** overall accuracy (frontier tool-calling; vs Gemini 3 Pro, whose score is an estimated pending-official)
- Deep-research / agentic search (Agent Tools API): **Research-Eval Reka 63.9** (beats GPT-5 45.5, Sonnet 4.5 41.2, Gemini 3 Pro 55.9), **FRAMES 87.6**, **X Browse 56.3**

Reasoning / knowledge:

- FActScore factuality "on par with Grok 4"; hallucination halved vs Grok 4 Fast (relative, not an absolute)
- GPQA Diamond / HLE / MMLU-Pro: **no absolute published** for this Fast endpoint (positioned below the Grok 4/4 Heavy "brain" tier); superseded on reasoning by the 4.20/4.5+ line

Coding:

- SWE-bench Verified / LiveCodeBench: **no published absolute** for this exact ID (Vals notes the successor 4.20 improves AIME/GPQA/LCB/SWE over 4.1 Fast)

Long context:

- 2M window with multi-turn long-context consistency emphasized; **no MRCR/RULER numeric score transcribed** in the launch material.

### Normalized scores (1–100)

- **Tool use: 92/100** Class-defining: an **AA-verified τ²-bench Telecom 100%** plus BFCL-v4 72% and best-in-class agentic-search (Research-Eval 63.9, FRAMES 87.6) with native parallel tool calls — the whole point of this model, and it leads the cohort here.
- **Reasoning: 62/100** Deliberately the "hands," not the "brain": factuality is Grok-4-class, but no GPQA/HLE absolutes are published and the successor line is explicitly better at judgment — so pure reasoning is solid-mid, not frontier.
- **Context window: 90/100** A genuine **2M-token** window trained to hold up across long multi-turn agentic horizons — top of the cohort — held just under 95 by the absence of a published single-window retrieval score.
- **Multimodal: 60/100.** *(Revised by the 2026-11-04 second pass from 15/100 to **60/100**: Artificial Analysis independently lists this model as supporting “text and image input” with explicit FAQ confirmation (“Can Grok 4.1 Fast (Reasoning) process images? Yes.”); pass-1 characterized it as text-only based on xAI’s launch marketing focused on tool-calling; no published vision benchmarks (MMMU-Pro listed but N/A due to API retirement) → scored at band floor, not the 65–70 range that evidence-backed scores would warrant.)*
- **Coding: 58/100** Competent agentic coding via tool use, but with no SWE-bench/LiveCodeBench absolute for this endpoint and a design center in search/support agents rather than repo-scale software, coding is scored as functional-not-specialist.
- **Cost efficiency: 96/100** $0.20/$0.50 per 1M (cached $0.05) with blazing-fast inference is among the cheapest serious agentic tiers in the registry — the second pillar of its pitch.
- **Overall Score: 72/100.** *(Revised by the 2026-11-04 second pass from 63.4/100 to **72/100**: Multimodal 15→60 per AA modality correction; half-up mean (92+62+90+60+58)/5 = 362/5 = 72.4 → 72.)* Best fit: **high-volume, cost-sensitive tool-calling agents — customer support, finance ops, and deep/agentic search** — where elite τ²/BFCL scores, a 2M window and pennies-per-task pricing matter far more than frontier reasoning. **Origin-retired on xAI API (May 15, 2026); serving only via Azure until May 2027; Grok 4.3 is the designated successor.**

---

## Second-pass update — 2026-11-04 (UTC)

Staleness-triggered re-research (prior pass 2026-10-20). Material lifecycle finding (full origin retirement) plus a modality correction from independent source.

**Sources:** lifecycle — https://teqengine.ai/model-change-index/models/xai-grok-4-1-fast-reasoning (three-platform table: **xAI API retired May 15, 2026**, requests served by Grok 4.3 with low reasoning effort billed at Grok 4.3 rates; **Google Vertex shut down Aug 20, 2026** announced Jul 8; **Azure AI Foundry Active, shuts down May 19, 2027**) plus https://docs.x.ai/developers/migration/may-15-retirement (“Effective May 15, 2026 at 12:00 PM PT, the following models will be retired: grok-4-1-fast-reasoning; grok-4-1-fast-non-…”) and https://docs.oracle.com/en-us/iaas/Content/generative-ai/xai-grok-4-1-fast.htm (“deprecated on May 15, 2026, retires on August 15, 2026”) · AA specs — https://artificialanalysis.ai/models/grok-4-1-fast-reasoning (**Intelligence Index = N/A**, “No publicly available API”; model page header: “This model is deprecated. We only continue performance benchmarking for the default 10k input token workload”; **Input modality: text and image**; FAQ: “Is Grok 4.1 Fast (Reasoning) multimodal? Yes”; released Nov 19 2025; 2M ctx confirmed; context 2M, proprietary, reasoning yes) · pricing — xAI API no longer serves this slug (OpenRouter page 404); AA price section shows N/A; pass-1’s $0.20/$0.50/$0.05 cannot be independently reconfirmed (model retired from all primary platforms).

**Trigger resolution:** the pass-1 revisit trigger required “an Artificial Analysis Intelligence-Index single number for the 4.1-Fast-reasoning endpoint, or published GPQA/SWE-bench absolutes.” AA lists the model but **Index = N/A** (API retired; benchmarking reduced to default workload only, no numeric composite). No GPQA or SWE-bench absolutes published. Trigger **UNFIRED** on benchmark evidence. However, a separate material finding (modalities) was identified independently.

**Modality correction:** pass-1 stated “text-only in / text out (no image/audio on the Fast lane).” AA’s independent technical spec table now confirms **“Input modality: Supports text and image”** with explicit FAQ (“Can Grok 4.1 Fast (Reasoning) process images? Yes”). The Grok 4.1 Fast line inherited vision from the Grok 4 family (successor Grok 4.3 “accepts text and image inputs” per OpenRouter). No vision benchmark scores exist for this exact ID (model retired before AA could run MMMU-Pro or similar). **Resolution: Multimodal 15→60** (text+image band floor; methodology says “text+image in / text out is the +image 60–70 band”; scored at 60 absent any evidence-backed visual-understanding score).

**Lifecycle flag:** `legacy` — origin (xAI API) retired May 15, 2026, replaced by Grok 4.3; Google Vertex retired Aug 20; Azure floor 2027-05-19. The model is functionally unreachable on all primary serving paths except Azure; pricing and behavior no longer match the original endpoints (billed at Grok 4.3 rates).

**Bands unchanged:** Tool 92 (AA Index N/A cannot revise a τ²-verified absolute); Reasoning 62; Context 90; Coding 58 — no new benchmark evidence for any of these. Cost band moot (model retired; pass-1’s $0.20/$0.50 no longer operative).

**Overall Score: 72/100** — half-up mean (92+62+90+60+58)/5 = 362/5 = 72.4 → 72.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-20
- Method: public internet research — xAI "Grok 4.1 Fast and Agent Tools API" launch post (τ²-bench Telecom 100% AA-verified, BFCL-v4 72%, Research-Eval Reka 63.9 / FRAMES 87.6 / X Browse 56.3, pricing $0.20/$0.50/$0.05, 2M ctx, the `-reasoning` vs `-non-reasoning` API variants), OpenRouter listing, and Vals/Artificial-Analysis context on the 4.20/4.5+ supersession. Scores are normalized 1–100 interpretations, not official vendor scores; missing GPQA/SWE absolutes are flagged as gaps, not filled from the flagship Grok 4. Curated `meta.json` "128K / Text in-out" was overridden by first-party evidence (2M context; text-only retained).
- Revisit trigger: an Artificial Analysis Intelligence-Index single number for the 4.1-Fast-reasoning endpoint, or published GPQA/SWE-bench absolutes (note the 4.3+ line is the recommended successor).
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04. AA Index trigger tested/unfired; material lifecycle (full origin retirement May 15 2026, teqengine + xAI docs + Oracle three-way); Multimodal 15→60 per AA spec contradiction of pass-1; Overall 63.4→72.
- Future sources: add a new file next to this one, e.g. `Gemini_2.5_Flash.md`, using the same headings.
