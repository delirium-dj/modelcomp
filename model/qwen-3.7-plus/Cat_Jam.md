# Qwen 3.7 Plus — findings by Cat Jam

- Source: Alibaba / Qwen 3.7 Plus (`opencode/qwen-3-7-plus`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's multimodal agent-grade model (released 2026-06-02). Vision-language + general agent; lower-cost than Qwen3.7-Max, much broader modality agent features.
- **Provider / access:** Alibaba Cloud Model Studio (DashScope) — OpenAI/Anthropic compatible; regions (Beijing, Singapore, Hong Kong, Germany, Japan, US, US Virginia). Text + image + video in; text out.
- **Release / knowledge:** Released GA 2026-06-02 (snapshot 2026-05-26). Knowledge cutoff not published in sampled docs.
- **IDs:** `qwen3.7-plus` (Alibaba)
- **Context window:** 1,048,576 tokens; max output 65,536. Reasoning budget 262K. Verified.
- **Modalities:** Text, image, video; text out. Function calling, structured output, web search, prefix completion, context caching, batch inference.
- **Pricing (as of 2026-10-16):** $0.40 / $1.60 per 1M (cache hit $0.08; cache creation $0.50; explicit cache read $0.04; tiered by ≤256K or ≤1M). Very cheap.
- **Architecture:** Qwen 3.7 text backbone with vision+video; proprietary API-only (no open weights). No open weights.

### Raw benchmarks found

Agent / tool use:

- ScreenSpot Pro (GUI grounding): **79.0**
- AndroidWorld (mobile agent): 81.0 (ai-tldr)
- Terminal-Bench 2.0: **70.3%** (ai-tldr)
- Vals Index: 38.6, Vals Multimodal Index 53.9
- SkillsBench: Vals reports 54.3% for Plus
- MCP-Mark 58.7% (Vals? in the llmboard list)
- Toolathlon? not in sampled open doc
- AA-Agentic Index (max effort): 17.5 (AA table)
- GPQA? ok Reasoning below.

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (AI/TLDR) / AA 90.0%
- HLE: **35.6%** (AA)
- IFBench: 78.0% (AA)
- AA Intelligence Index: **25.2** (AA)
- AA-LCR: 73.0%
- GDPval-AA: **13.4%** (AA measured as agent score); (Elo not in sampled)
- CritPt: 9.1%, SciCode 46.1%
- MRCR v2: 91.70 (MRCR? lmmboard 91.7)
- TVBench etc: 78.2
- Video-MME etc: many from llmboard own.

Coding:

- Terminal-Bench 2.0: 70.3
- Vibe Code Bench v1.1 (Vals): 46.4
- Vals SWE-bench: maybe not separate for Plus in sampled doc? Not listed in OpenRouter summary (Vals has Vals Index 38.6 only). Mark not found.

Long context:

- MRCR v2 91.7 (llmboard score; probably 256K?); LongBench? not sampled.
- 1M context officially, but no MRCR standard note. AA-LCR 73.0%.

### Normalized scores (1–100)

- **Tool use: 78/100.** ScreenSpot Pro 79.0, AndroidWorld 81.0, Terminal-Bench 70.3, MCP-Mark 58.7. Good agent integration at low cost.
- **Reasoning: 76/100.** GPQA 90.3, HLE 35.6, AA Intelligence 25.2, LCR 73.0. Mid-lower reasoning despite high tool assist.
- **Context window: 92/100.** MRCR v2? (llmboard 91.7) says good 256K retrieval; 1M official; long-context validated.
- **Multimodal: 86/100.** Text, image, video; ScreenSpot 79, GUI agents strong; no audio output.
- **Coding: 76/100.** Terminal-Bench 70.3, Vibe Code 46.4, Vals Vibe Code; relative modest.
- **Cost efficiency: 95/100.** $0.40/$1.60, cached $0.08; extremely cheap multimodal.
- **Overall Score: 82/100.** Mean (78+76+92+86+76)/5 = 81.6 → 82. Good low-cost multimodal agent, not frontier coding.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Alibaba docs, AI/TLDR, OpenRouter, llmboard, Apidog); scores are normalized 1–100 interpretations, not official vendor scores. Agent/multimodal benchmarks are self/vendor-heavy.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
