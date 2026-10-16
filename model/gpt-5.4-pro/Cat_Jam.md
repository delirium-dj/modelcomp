# GPT-5.4 Pro — findings by Cat Jam

- Source: OpenAI / GPT-5.4 Pro (`opencode/gpt-5.4-pro`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** Premium higher-compute variant of GPT-5.4 (released 2026-03-05). Responses-only; deeper reasoning for hard problems; replacement for o3-deep-research.
- **Provider / access:** OpenAI API (`gpt-5.4-pro`, snapshot `gpt-5.4-pro-2026-03-05`); text/image in; text out.
- **Release / knowledge:** Released early March 2026; knowledge cutoff Aug 31, 2025.
- **IDs:** `gpt-5.4-pro` (OpenAI)
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** Text, image in; text out. Responses API only; reasoning effort medium (default), high, xhigh. Functions, file search, web search, computer use, MCP, tool search, apply patch.
- **Pricing (as of 2026-10-16):** $30 / $180 per 1M input/output (regional +10%). Batch 50%. No cached discount.
- **Architecture:** Proprietary GPT-5.4 + extra test-time compute.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** (Pro), Master? (ai-tldr)
- GDPval: **83.0%** (GPT-5.4 family, openai.com)
- OSWorld-Verified: **75.0%** (GPT-5.4 line; Pro-specific not listed separately in sampled data; use 75.0 as GPT-5.4 Pro is at least this)
- MCP Atlas: Pro led? DeepLearningAI says Coding/Agentic indices, not separate MCP for Pro. Not found separately for Pro.
- Toolathlon/Practice: base 55.6? Not for Pro. Not published.

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (GPT-5.4 Pro, wideRiver/ai-tldr)
- HLE (no tools): **44.3%** (lmcouncil) — Pro; tools number not published separately (GPT-5.4 with tools 52.2? from OpenAI for 5.5; for 5.4, 36? no). Use 44.3 (no tools).
- AA Intelligence Index: 49.6 (benchgap est for Pro); DeepLearning says 57 at xhigh (higher). Use 49.6 as measured-like estimate? Label estimated. 
- ARC-AGI-2: **83.3%** (ai-tldr) (not verified itself; widely cited)
- FrontierMath Tier 4: 38% (ai-tldr)
- AA-LCR? not found for Pro
- AAA? 

Coding:

- SWE-Bench Pro (Public): **57.7%** (GPT-5.4 family, OpenAI intro table; Pro-specific unreported in sampled OpenAI docs)
- OSWorld verified 75.0
- Terminal-Bench 2.0: Pro-specific not found (GPT-5.4 81.8? from wideRiver says base 81.8? Actually lmcouncil base 81.8; pro not tested)
- MCP Atlas family etc. not Pro

Long context:

- 1,050,000 context; independent MRCR/RULER not found in sampled data.

### Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp 89.3, OSWorld 75, GDPval 83; Terminal-Bench/CUA not Pro-verified caps.
- **Reasoning: 90/100.** GPQA 94.6, HLE 44.3, ARC-AGI-2 83.3, FrontierMath Tier 4 38; CritPt not measured (AA est 30.0). Strong long-thinking reasoning.
- **Context window: 90/100.** 1.05M with extra compute, but no retrieval score published caps.
- **Multimodal: 78/100.** Text/image in; text out; OSWorld 75. no audio/video input.
- **Coding: 82/100.** SWE-Pro 57.7 (family), OSWorld 75 (base), Terminal not Pro; Coding Agent/Intelligence #1 per AA but specific terminal score unavailable caps.
- **Cost efficiency: 25/100.** $30/$180 premium, no cache discount.
- **Overall Score: 86/100.** Mean of (88 + 90 + 90 + 78 + 82) / 5 = 85.6. Premium extra-compute mid-tier, behind 5.5–Pro generations on speed/cost but stronger on harder problems.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (OpenAI docs, DeepLearningAI, llmreference, benchgap, wideriver, LMCouncil, ai-tldr); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
