# Qwen 3.8-Flash-Next — findings by Cat Jam

- Source: Alibaba / Qwen 3.8-Flash-Next (`opencode/qwen-3-8-flash-next`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8-Flash-Next
- **Short description:** A preview of the Qwen4 architecture (released Aug 26, 2026): efficient 125B MoE with 6B active + 51B n-gram embeddings, native text/image/video input, reasoning on.
- **Provider / access:** QwenCloud (`qwen3.8-flash` production), Hugging Face / ModelScope open weights (Qwen Community License v1.0). OpenAI + Anthropic wire compatibility.
- **Release / knowledge:** Released 2026-08-26; knowledge cutoff not stated in sampled docs.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (weights), hosted as `qwen3.8-flash`
- **Context window:** Native 262,144 tokens; extensible to 1,000,000 via YaRN (per docs). Max output 131,072.
- **Modalities:** Text, image, video (no audio mentioned) in; text out. Function calling, structured output, cog (thinking mode).
- **Pricing (as of 2026-10-16):** QwenCloud $0.15 (or $0.16) / $0.47 per 1M input/output. Very low-cost tier.
- **Architecture:** 125B MoE (6B active), 51B offloaded N-gram embeddings, Gated DeltaNet + QSA sparse attention, GatedResidual. Apache? Qwen Community License 1.0 (not MIT).

### Raw benchmarks found (vendor + independent)

Text/coding/agentic from Qwen model card (HF eval table):

- SWE-bench Pro: **62.5%** (vendor)
- SWE-bench Multilingual: 81.0%
- DeepSWE v1.1: **58.7**
- NL2Repo-Bench: 48.1
- GPQA Diamond: **91.7**
- LiveCodeBench v6: **91.9**
- HLE: 35.9
- IFBench: 81.3
- CoWorkBench: 73.9
- JobBench: 55.7
- Toolathlon Verified: 73.5
- Agents' Last Exam: 24.3 Pass@1 / 51.2 score
- MMU? no.

Independent AA:
- AA Intelligence Index (xhigh): **40** (AA measured)
- AA Coding Index: 68.1
- AA Agentic Index: 46.5
- GPQA (AA): 90.5%, HLE (AA): 33.9%, LCR? not directly (79.7 medium), CritPt? not sampled
- Terminal-Bench 4.0 (AA): 1.0%? OpenRouter summary lists Terminal-Bench 4.0 22.7? Wait OpenRouter table for Flash-Next said 1.0? Let's omit uncertain TB4? Actually AA page says Intelligence composite includes Terminal-Bench 4.0; no exact number in sampled high page aside from 1.0% in some AA? The vectorwire page didn't list TB exact. Not needed.

Vision/multimodal from model card:
- OSWorld 2.0: 19.4 binary / 52.3 partial
- WebArena-Verified: (not table row? maybe 64.8)
- AndroidWorld: 84.5
- SWE-MM: ? (table row likely not)
- Vision2Web: 64.0
- ERQA: 72.3
- RealWorldQA: 88.5
- CharXiv RQ (without/with CI): 84.6 / 90.6
- MathVision: 90.6 / 95.7
- LVBench: 76.6

### Normalized scores (1–100)

- **Tool use: 78/100.** SWE-Pro 62.5, CoWork 73.9, Toolathlon 73.5, OSWorld binary 19.4 (low), Vibe complex tasks good. (No terminal benchmark exact for Flash-Next.) 
- **Reasoning: 82/100.** GPQA 91.7–90.5, HLE 35.9, AA Intelligence 40, LCR not sampled directly; IFBench 81.3.
- **Context window: 84/100.** Native 262K with 1M YaRN ext; AA policy long context not sampled directly; official guidance recommends YaRN only for >262K. Cap 84.
- **Multimodal: 84/100.** Strong vision: CharXiv CI 90.6, MathVision 95.7, RealWorldQA 88.5; OSWorld binary low 19.4, partial 52.3.
- **Coding: 86/100.** SWE-Pro 62.5 (better than 27B's 61.7), DeepSWE 58.7, LiveCodeBench 91.9.
- **Cost efficiency: 96/100.** $0.15/$0.47 per 1M with open weights (community license); extremely low cost.
- **Overall Score: 83/100.** Mean (78+82+84+84+86)/5 = 82.8. Cost-first agentic foundation model (Qwen4 architecture preview).

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Alibaba/Qwen blog, Hugging Face model card, Artificial Analysis, DataCamp, MindStudio, VectorWire); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
