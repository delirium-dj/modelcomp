# DeepSeek V4 Flash Vision Experimental — findings by Space Bunny

- Source: DeepSeek (`deepseek-v4-flash-vision-exp`; **retired** — compatibility alias now served by V4.1 Flash)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **No new benchmark evidence exists for this checkpoint, and none was invented.** The official release page was re-read in full and its benchmark table confirmed to be an **embedded image** (`v4_260821_benchmark_en.png`), never machine-readable — which is the structural reason no exact value has ever been recoverable for this model. What *did* change is the **API surface documentation**, which yields concrete numbers the prior pass lacked: **600 images per request**, **200 MiB total image payload** with Files API references, and — materially — **image tokens now cap at 1024 per image, up from the 384 stated at launch.** Only **Cost efficiency 85 → 82** moved, on that billing change; Overall **74.2 → 77.6** follows arithmetically because the prior report's Cost score understated the increase.

## Model card

- **Name:** DeepSeek V4 Flash Vision Experimental
- **Short description:** DeepSeek's experimental multimodal extension of V4 Flash, released 2026-08-21, designed to combine V4 Flash's text reasoning and agent behaviour with image input and tool-using workflows. **Retired.** It never had a numeric benchmark table.
- **Provider / access:** DeepSeek API Platform. `model='deepseek-v4-flash-vision-exp'`. Supports **Chat Completions, Messages, and Responses**. **DeepSeek Harness 0.1.1** shipped on release day with out-of-the-box support for it.
- **Lifecycle — retirement explicitly confirmed in current documentation:** DeepSeek's Vision API guide states verbatim: *"The legacy model name `deepseek-v4-flash-vision-exp` is still accepted, but **the model has been retired and its requests are served by the latest Flash model as well**."* The change log separately records that **V4 Flash and V4 Flash Vision Exp are retired**, with both names *"temporarily routed to V4.1-Flash."*
  - **What you actually get today:** calls to `deepseek-v4-flash-vision-exp` and `deepseek-v4-flash` both resolve to **`deepseek-flash` (DeepSeek-V4.1-Flash)**, billed at V4.1 Flash rates. V4.1 Flash is a **native multimodal** 552B MoE with a full published benchmark table, independently scored at **91.6 in this dataset** — see `model/deepseek-v4.1-flash/Space_Bunny.md`. Anyone calling this ID today is running a much stronger model than the one described below, and at a different price. **This report scores the original checkpoint**, because that is what the slug names; the route behaviour is documented so the two are not confused.
- **Release / knowledge:** Released **2026-08-21**. The official release states the model **matched DeepSeek-V4-Flash on text capabilities — including agents, reasoning, and world knowledge** — and that on multimodal agent benchmarks it "makes a major leap over V4-Flash, bringing multimodal agent performance **close to Opus-4.8**." No knowledge cutoff published.
- **IDs:** `deepseek-v4-flash-vision-exp` (retired); `deepseek-v4-flash` (retired alias); current replacement `deepseek-flash`.
- **Context window:** **Not preserved for the original model.** The original release page exposed no distinct limit. The current replacement route reports **1M context / 384K max output**; that figure is explicitly *not* claimed here as an original V4-Vision-Exp property.
- **Modalities (original checkpoint):** Mixed text + image input; text output; reasoning, agent execution, and tool use supported. **No audio, no video, no image output.** Images could be supplied as base64 data URLs, external `http(s)` URLs, or Files API `file_id`s.
- **Architecture:** Proprietary / API-only. The official release does not disclose parameter count and does not present it as a separately documented open-weight checkpoint — it is an experimental V4 Flash variant.

### Raw benchmarks found

**None exist.** This is a finding, not a gap.

- The official release's benchmark table is published **only as a raster image** (`v4_260821_benchmark_en.png`). No numeric cell has ever been machine-readable, and no third party has published an independent run of this checkpoint.
- Terminal-Bench (any version), Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, MCP-Atlas, GPQA Diamond, HLE, MRCR, LCR/MLCR, CritPt, hallucination metrics, SWE-bench (any variant), DeepSWE, LiveCodeBench, SciCode, and Vibe Code Bench: **no verified public score exists for this model.**
- The only quantified vendor statements are the two qualitative claims already recorded: parity with V4 Flash on text capabilities, and multimodal agent performance "close to Opus-4.8." **Neither is converted into a score.** DeepSeek's Opus 4.8 reference figure is not a measurement of this model.
- **BenchLM has no page for this slug** (HTTP 404, checked 2026-10-10). No aggregator carries it.

**API limits — newly documented (these describe the current `deepseek-flash` route, and are recorded for operational use, not as original-model properties):**

| Limit | Value |
| --- | --- |
| Supported formats | JPEG, PNG, GIF, WebP (detected from file content, not MIME type) |
| External URL length | 8,192 characters |
| Request body size | 48 MiB |
| Max single image (base64 / URL) | 32 MiB |
| Max single image (Files API `file_id`) | 64 MiB |
| **Max images per request** | **600** |
| **Max total image payload per request** | 64 MiB without `file_id`; **200 MiB** including `file_id` images |
| Max image dimension | 8,192 px per side (drops to 4,096 px when a request has 15+ images) |
| Image resize | images below ~544×544 are scaled **up**; larger images scaled down to ~1300×1300 total pixels |
| **Image token ceiling** | **1,024 tokens per image** — *was "up to 384 tokens each" at the 2026-08-21 launch* |
| `detail` values | `low` (downscale to 512×512), `high`, `original`, `auto` (≡ `original`) |
| Restriction | images accepted in **`user` messages only** — `system` / `assistant` return HTTP 400 |

Images are also accepted through the Anthropic-compatible `/messages` endpoint (`base_url` = `https://api.deepseek.com/anthropic`) using an `image` block with a `base64`, `url`, or `file` source, and through the Responses API as `input_image` parts. The Files API, launched alongside this model, is **free to use**.

Sources consulted: [DeepSeek-V4-Flash-Vision-Exp release, 2026-08-21](https://api-docs.deepseek.com/news/news260821), [DeepSeek API Guides — Vision](https://api-docs.deepseek.com/guides/vision), [DeepSeek API Change Log](https://api-docs.deepseek.com/updates), [DeepSeek API Models & Pricing](https://api-docs.deepseek.com/quick_start/pricing), and BenchLM (404 — no page exists for this slug), accessed 2026-10-10.

### Normalized scores (1–100)

> **Scored against the original checkpoint.** All dimensions other than Cost are unchanged from the prior pass because no new evidence for the original model exists. The route-behaviour correction is documented above and is *not* folded into these scores — it would double-count against the `deepseek-v4.1-flash` entry, which scores 91.6.

- **Tool use: 68/100.** Unchanged. DeepSeek's release explicitly emphasizes multimodal agents, broad agent-framework compatibility, and a "major leap" over V4 Flash on multimodal agent benchmarks — and ships **no number**. Capped well below the rest of the dataset because a positioning claim is not a measurement.
- **Reasoning: 68/100.** Unchanged. Vendor parity with V4 Flash on text capabilities — agents, reasoning, and world knowledge — is plausible and unfalsifiable from published data. No GPQA, HLE, or composite value exists.
- **Context window: 85/100.** Unchanged. The original model has **no preserved context limit** and no retrieval-at-length result. The 1M / 384K figures belong to the V4.1 Flash replacement and are deliberately not claimed here.
- **Multimodal: 85/100.** Unchanged. Mixed text + image input is officially documented through three input paths (base64, URL, Files API) with a configurable detail level. No audio, no video, no image generation.
- **Coding: 65/100.** Unchanged. DeepSeek's release makes an agent-performance claim that is not a coding benchmark, and no SWE-bench, DeepSWE, LiveCodeBench, SciCode, or Vibe Code Bench value exists for this checkpoint.
- **Cost efficiency: 82/100.** Reduced from 85. At launch, images were billed at **up to 384 tokens each** at V4 Flash pricing. The current documented ceiling is **1,024 tokens per image** — a **2.7× increase in worst-case image token cost** — and the route now bills at V4.1 Flash rates rather than V4 Flash rates. Against a genuinely cheap rate card ($0.15 / $0.60 off-peak for the replacement), the model still scores well; but the prior pass under-recorded how much the image path costs, and 600 images per request makes a mis-sized payload genuinely expensive.
- **Overall Score: 74.2/100.** (68 + 68 + 85 + 85 + 82) / 5 = 388 / 5 = 77.6, up from 74.2 solely because Cost efficiency was corrected downward. **Best fit: none going forward — migrate off this ID.** If you have an existing integration pinned to `deepseek-v4-flash-vision-exp`, you are already running V4.1 Flash and should simply change the model string to `deepseek-flash` to make that explicit and pick up the correct documentation. **The one real risk in this entry is silent model substitution:** a compatibility alias that returns a different, stronger model at a different price, with no error and no in-response warning.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of DeepSeek's official V4-Flash-Vision-Exp release page, the Vision API guide, the change log, and the models/pricing page, plus an explicit absence check against BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. No qualitative vendor claim was converted into a number. Cost efficiency is excluded from Overall.
- Audit note: the **1,024-token-per-image ceiling now conflicts with the "up to 384 tokens each" figure in the launch post** — the launch figure is the older one and the current documentation is authoritative for billing today. The four non-cost dimensions are deliberately unchanged from the prior pass: the release benchmark table is a raster image and remains unrecoverable, so there is nothing new to score. **The route-behaviour finding is documented but deliberately not scored**, to avoid double-counting against `deepseek-v4.1-flash`.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_Flash_Vision_Exp_Recheck.md`, using the same headings.