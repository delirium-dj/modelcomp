# GPT-5.5 Pro — findings by Cat Jam

- Source: OpenAI / GPT-5.5 Pro (`opencode/gpt-5.5-pro`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's higher-compute variant of GPT-5.5 (released 2026-04-23): same underlying weights with parallel test-time compute for harder, higher-accuracy work; Responses API only.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`, snapshot `gpt-5.5-pro-2026-04-23`), ChatGPT Pro/Business/Enterprise, Batch API. Responses API only. Text/image in; text out.
- **Release / knowledge:** Released 2026-04-23; knowledge cutoff 2025-12-01.
- **IDs:** `gpt-5.5-pro` (OpenAI), `openai/gpt-5.5-pro` (OpenRouter)
- **Context window:** 1,050,000 tokens; max output 128,000. Reasoning effort: medium, high (default), xhigh.
- **Modalities:** Text, image in; text out. Function calling, structured outputs, file search, web search, image gen, code interpreter, hosted shell, MCP. No tool-side Realtime/Fine-tuning.
- **Pricing (as of 2026-10-16):** $30 / $180 per 1M input/output (regional +10%). Batch $10/$45. No cached input discount. Very expensive.
- **Architecture:** Proprietary; extra parallel TPU-style test-time compute over GPT-5.5. No open weights.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **90.1%** (OpenAI published; base 84.4)
- GDPval (wins or ties): 82.3% (claimed OpenAI; base 84.9) — attributed
- Toolathlon: not published for Pro (base not listed for Pro in sampled OpenAI table)
- OSWorld-Verified / computer use: **not published** for Pro (base 78.7%)
- Cybersecurity: **not published** (no base proxy)
- Investment-banking modeling (internal): 88.6% (claimed, internal eval)
- GeneBench: 33.2% (claimed OpenAI)

Reasoning / knowledge:

- HLE (no tools / w/ tools): **43.1% / 57.2%** (OpenAI published/pro-claimed; base HLE 41.4/52.2)
- GPQA Diamond: 93.5% (LLMReference composite for Pro) or 93.6? Not clearly published for Pro; Techsy lists GPQA Diamond? Pro row maybe absent; base 93.6, GPT-5.4 Pro 94.4. Mark "no verified Pro figure; base 93.6 is not transferable" — use 93.6 as uncertain proxy? Label not invented: "no verified Pro score published; OpenAI's broader table does not include a Pro GPQA row; base GPT-5.5 GPQA 93.6 (not transferable)."
- FrontierMath Tier 1–3 / Tier 4: **52.4% / 39.6%**
- ARC-AGI-1 / ARC-AGI-2: **96.5% / 84.6%** (atlas.kevinhu)
- ACC/Epoch Capabilities Index 162 (atlas)
- GDPval Pro 82.3% (claimed, below base's 84.9)

Coding:

- SWE-Bench Pro: **not published** (OpenAI left coding row blank; base GPT-5.5 58.6% is NOT a Pro score)
- OSWorld: not published (base 78.7%)
- Terminal-Bench: not published for Pro (base 82.7 TB2.0)
- Cybersecurity: not published
- Expert-SWE internal: base 73.1; Pro not published

Long context:

- 1,050,000 context but **long-context retrieval not published** for Pro (no usable base proxy). TechSy explicit blank.

### Normalized scores (1–100)

- **Tool use: 90/100.** BrowseComp 90.1; OSWorld not published (base 78.7) lowers confidence. Browsing/search strong; terminal/agent roles unreported cap.
- **Reasoning: 90/100.** HLE 43.1–57.2, GPQA proxy ~93.6, ARC-AGI-2 84.6, FrontierMath T4 39.6; strong mathematical and deep-reasoning tier.
- **Context window: 90/100.** 1.05M with extra compute available on long inputs; no published retrieval score caps top-end.
- **Multimodal: 76/100.** Text/image in, text out (same base modalities; no audio/video). No multimodal benchmark specific to Pro in sampled data.
- **Coding: 84/100.** OpenAI did not publish SWE/OSWorld/Terminal-Bench for Pro; base GPT-5.5 coding (58.6 SWE-Pro) is lower than Fable 5 etc. Base Terminal 82.7 good; Pro compute should help but unverified ⇒ cap below verified coding specialists.
- **Cost efficiency: 25/100.** $30/$180 per 1M (no cache discount; batch $10/$45) — bespoke high-compute; very premium.
- **Overall Score: 86/100.** Mean of (90 + 90 + 90 + 76 + 84) / 5 = 86.0. Extra-compute GPT-5.5 for browsing/math/hard reasoning; published coding rows absent (do not infer).

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (OpenAI docs, TechSy analysis, llmreference, benchmark atlas, mer.vin, benchgap, Artificial Analysis article); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
